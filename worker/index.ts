import { EmailMessage } from "cloudflare:email"

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
  INQUIRY_EMAIL: { send(message: EmailMessage): Promise<void> }
  INQUIRY_TO: string
}

const FROM = "inquiries@tailoredsanta.com"

const FIELDS: [string, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["event_date", "Preferred date"],
  ["event_type", "Planning"],
  ["pets", "Pets"],
  ["message", "Message"],
]

// Strip CR/LF so user input can't inject extra email headers.
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim()

async function handleInquiry(request: Request, env: Env): Promise<Response> {
  const form = await request.formData()
  const get = (key: string) => String(form.get(key) ?? "").slice(0, 5000)
  const thanks = Response.redirect(new URL("/?inquiry=received#inquire", request.url).toString(), 303)

  // Honeypot: bots fill the hidden field; pretend it worked.
  if (get("bot-field")) return thanks

  const name = oneLine(get("name"))
  const email = oneLine(get("email"))
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response("Please go back and enter your name and a valid email.", { status: 400 })
  }

  const body = FIELDS.map(([key, label]) => `${label}: ${get(key) || "-"}`).join("\n")
  const raw = [
    `From: Tailored Santa Website <${FROM}>`,
    `To: ${env.INQUIRY_TO}`,
    `Reply-To: ${name} <${email}>`,
    `Subject: Booking inquiry from ${name}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@tailoredsanta.com>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    body,
  ].join("\r\n")

  await env.INQUIRY_EMAIL.send(new EmailMessage(FROM, env.INQUIRY_TO, raw))
  return thanks
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)
    if (pathname === "/api/inquiry") {
      if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405 })
      try {
        return await handleInquiry(request, env)
      } catch (err) {
        console.error("Inquiry failed", err)
        return new Response(
          "Sorry, something went wrong sending your inquiry. Please email hello@tailoredsanta.com.",
          { status: 500 },
        )
      }
    }
    return env.ASSETS.fetch(request)
  },
}
