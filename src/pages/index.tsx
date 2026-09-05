import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import banner from "../images/tailored-santa-banner-transparent.png"

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

const Page = styled.main`
  overflow-x: clip;
`

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`

const Section = styled.section`
  padding: 72px 0;

  @media (max-width: 640px) {
    padding: 52px 0;
  }
`

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
  background: rgba(253, 248, 238, 0.85);
  border-bottom: 1px solid rgba(20, 80, 50, 0.15);
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
  gap: 10px 16px;
  padding-top: 12px;
  padding-bottom: 12px;
`

const Wordmark = styled.a`
  font-family: var(--display);
  font-weight: 600;
  font-size: 1.35rem;
  color: var(--evergreen);
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px 22px;

  a {
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    white-space: nowrap;

    &:hover {
      color: var(--evergreen);
    }
  }

  @media (max-width: 880px) {
    a:not(.cta) {
      display: none;
    }
  }
`

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--brand-red);
  color: #fff !important;
  font-weight: 700;
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 999px;
  box-shadow: var(--shadow);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--brand-red-dark);
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.92rem;
  }
`

const ButtonGhost = styled(Button)`
  background: transparent;
  color: var(--brand-red) !important;
  box-shadow: none;
  border: 2px solid var(--brand-red);

  &:hover {
    background: rgba(223, 7, 20, 0.08);
    color: var(--brand-red) !important;
  }
`

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const Hero = styled.section`
  background: linear-gradient(180deg, var(--mist) 0%, var(--paper) 100%);
  text-align: center;
  padding: 56px 0 64px;
`

const BannerImg = styled.img`
  width: min(560px, 90%);
  height: auto;
  margin: 0 auto 8px;
  display: block;
`

const Tagline = styled.h1`
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  margin: 12px 0 8px;
`

const Sub = styled.p`
  font-size: clamp(1.05rem, 2.4vw, 1.3rem);
  color: var(--ink-soft);
  max-width: 620px;
  margin: 0 auto 28px;
`

const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`

/* ------------------------------------------------------------------ */
/* Trust bar                                                           */
/* ------------------------------------------------------------------ */

const TrustBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 34px;
`

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid rgba(20, 80, 50, 0.2);
  color: var(--ink);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 999px;
  box-shadow: 0 6px 16px -12px rgba(20, 50, 32, 0.5);
`

/* ------------------------------------------------------------------ */
/* Generic section heading                                             */
/* ------------------------------------------------------------------ */

const Kicker = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--gold);
  margin: 0 0 10px;
`

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin-bottom: 14px;
`

const Lead = styled.p`
  color: var(--ink-soft);
  font-size: 1.1rem;
  max-width: 640px;
`

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

const About = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const AboutCard = styled.div`
  background: var(--surface);
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(20, 80, 50, 0.12);
`

/* ------------------------------------------------------------------ */
/* Reassurance / trust cards                                           */
/* ------------------------------------------------------------------ */

const Ease = styled(Section)`
  background: var(--evergreen);

  h2 {
    color: #fff;
  }

  ${Lead} {
    color: rgba(255, 255, 255, 0.82);
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 22px;
  margin-top: 34px;
`

const Card = styled.div`
  background: var(--surface);
  border-radius: 20px;
  padding: 26px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(20, 80, 50, 0.12);

  h3 {
    font-family: "Inter", sans-serif;
    font-size: 1.15rem;
    color: var(--brand-red-dark);
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    color: var(--ink-soft);
  }
`

const CardIcon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 12px;
`

/* ------------------------------------------------------------------ */
/* Steps                                                               */
/* ------------------------------------------------------------------ */

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 34px;
  counter-reset: step;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const Step = styled.div`
  position: relative;
  padding: 26px 24px 24px;
  background: var(--mist);
  border-radius: 20px;
  border: 1px dashed rgba(20, 80, 50, 0.35);

  &::before {
    counter-increment: step;
    content: counter(step);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--brand-red);
    color: #fff;
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 14px;
  }

  h3 {
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    color: var(--brand-red-dark);
    margin-bottom: 6px;
  }

  p {
    margin: 0;
    color: var(--ink-soft);
  }
`

/* ------------------------------------------------------------------ */
/* Inquiry form                                                        */
/* ------------------------------------------------------------------ */

const Inquire = styled(Section)`
  background: linear-gradient(180deg, var(--paper) 0%, var(--mist) 100%);
`

const FormCard = styled.div`
  background: var(--surface);
  border-radius: 24px;
  padding: 36px;
  box-shadow: var(--shadow);
  max-width: 720px;
  margin: 28px auto 0;
  border: 1px solid rgba(20, 80, 50, 0.14);

  @media (max-width: 560px) {
    padding: 24px;
  }
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Field = styled.label<{ $full?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--ink);
  grid-column: ${(p) => (p.$full ? "1 / -1" : "auto")};

  input,
  select,
  textarea {
    font: inherit;
    font-weight: 400;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1px solid rgba(56, 42, 45, 0.25);
    background: #fff;
    color: var(--ink);

    &:focus {
      border-color: var(--brand-red);
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }
`

const Submit = styled.button`
  grid-column: 1 / -1;
  justify-self: start;
  background: var(--brand-red);
  color: #fff;
  border: none;
  font: inherit;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--brand-red-dark);
  }
`

const FormNote = styled.p`
  text-align: center;
  color: var(--ink-soft);
  margin: 18px 0 0;
  font-size: 0.95rem;

  a {
    font-weight: 700;
  }
`

const ThankYou = styled.div`
  text-align: center;
  padding: 24px 0;

  .icon {
    font-size: 2.5rem;
  }

  h3 {
    font-family: var(--display);
    color: var(--evergreen);
    margin: 12px 0 8px;
  }

  p {
    color: var(--ink-soft);
    margin: 0;
  }
`

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const Footer = styled.footer`
  background: var(--evergreen-dark);
  color: #fff;
  text-align: center;
  padding: 40px 0;

  a {
    color: #fff;
    font-weight: 700;
  }

  p {
    margin: 6px 0;
  }
`

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const trustPills = [
  "🛡️ Background-checked",
  "🧸 Great with children",
  "🐾 Pet-friendly",
  "🤟 ASL fluent",
  "♿ Special-needs friendly",
]

const reassurances = [
  {
    icon: "🛡️",
    title: "Safe & vetted",
    body: "Lonnie is background-checked and follows clear, professional conduct guidelines. References are available on request so you can book with total confidence.",
  },
  {
    icon: "🧸",
    title: "Gentle with children",
    body: "Patient, calm, and sensory-aware, Lonnie meets every child at their pace — from shy toddlers to excited big kids — so photos feel joyful, never rushed.",
  },
  {
    icon: "🐾",
    title: "Wonderful with pets",
    body: "Dogs, cats, and furry family members are welcome. Lonnie is relaxed and comfortable around pets, making holiday photos with the whole family easy.",
  },
  {
    icon: "🤟",
    title: "Inclusive by design",
    body: "Certified in American Sign Language and comfortable working with wheelchairs and sensory needs, so every child feels fully included in the magic.",
  },
]

const steps = [
  {
    title: "Send an inquiry",
    body: "Tell us your date, location, and what you have in mind. It only takes a minute.",
  },
  {
    title: "We confirm the details",
    body: "We'll reply with availability, pricing, and answers to any questions about your visit.",
  },
  {
    title: "Lonnie brings the magic",
    body: "Sit back and enjoy warm, unforgettable moments and beautiful holiday photos.",
  },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const IndexPage: React.FC<PageProps> = () => {
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    if (new URLSearchParams(window.location.search).get("inquiry") === "received") {
      setSubmitted(true)
    }
  }, [])

  return (
    <Page>
      <GlobalStyle />

      <Header>
        <HeaderInner as="div">
          <Wordmark href="#top">Tailored&nbsp;Santa</Wordmark>
          <Nav>
            <a href="#about">Meet Lonnie</a>
            <a href="#ease">Why families trust us</a>
            <a href="#how">How it works</a>
            <a className="cta" href="#inquire">
              <Button as="span">Request a booking</Button>
            </a>
          </Nav>
        </HeaderInner>
      </Header>

      <Hero id="top">
        <Container>
          <BannerImg src={banner} alt="Tailored Santa — Experiences & Events" />
          <Tagline>Custom-fit Santa visits, booked in a click.</Tagline>
          <Sub>
            Warm, professional, and inclusive Santa experiences for photo
            sessions, home visits, and events — thoughtfully tailored to every
            child, family, and pet.
          </Sub>
          <HeroActions>
            <Button href="#inquire">Request a booking 🎅</Button>
            <ButtonGhost href="#about">Meet Lonnie</ButtonGhost>
          </HeroActions>
          <TrustBar>
            {trustPills.map((p) => (
              <Pill key={p}>{p}</Pill>
            ))}
          </TrustBar>
        </Container>
      </Hero>

      <Container>
        <About id="about">
          <div>
            <Kicker>Meet your Santa</Kicker>
            <SectionTitle>Say hello to Lonnie Taylor</SectionTitle>
            <p>
              Lonnie is one of Santa's special helpers, and he can't wait to
              bring his boundless Christmas cheer to your next event. Whether
              it's a bustling mall, a cozy home visit, a photo session, or a
              community gathering, Lonnie adapts seamlessly to any holiday
              setting.
            </p>
            <p>
              What makes Lonnie truly special is his dedication to
              inclusivity — making sure <strong>every</strong> child, and every
              pet, feels the wonder of the season in a calm, welcoming way.
            </p>
            <HeroActions style={{ justifyContent: "flex-start", marginTop: 22 }}>
              <Button href="#inquire">Check Lonnie's availability</Button>
            </HeroActions>
          </div>
          <AboutCard>
            <Kicker style={{ color: "var(--brand-red)" }}>At a glance</Kicker>
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>Photo sessions, home visits &amp; events</li>
              <li>Certified in American Sign Language</li>
              <li>Comfortable with sensory needs &amp; wheelchairs</li>
              <li>Relaxed and gentle around pets</li>
              <li>Background-checked &amp; professional</li>
            </ul>
          </AboutCard>
        </About>
      </Container>

      <Ease id="ease">
        <Container>
          <Kicker>Book with confidence</Kicker>
          <SectionTitle>Why families feel at ease</SectionTitle>
          <Lead>
            Inviting someone to spend time with your children and pets is a big
            deal. Here's how Lonnie earns that trust before he ever knocks on
            your door.
          </Lead>
          <CardGrid>
            {reassurances.map((r) => (
              <Card key={r.title}>
                <CardIcon>{r.icon}</CardIcon>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </Card>
            ))}
          </CardGrid>
        </Container>
      </Ease>

      <Container>
        <Section id="how">
          <Kicker>Simple &amp; stress-free</Kicker>
          <SectionTitle>How it works</SectionTitle>
          <Lead>Booking Lonnie takes three easy steps.</Lead>
          <Steps>
            {steps.map((s) => (
              <Step key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Step>
            ))}
          </Steps>
        </Section>
      </Container>

      <Inquire id="inquire">
        <Container>
          <div style={{ textAlign: "center" }}>
            <Kicker>Let's make some magic</Kicker>
            <SectionTitle>Request a booking</SectionTitle>
            <Lead style={{ margin: "0 auto" }}>
              Share a few details and we'll get right back to you with
              availability and pricing. No obligation — just a friendly hello.
            </Lead>
          </div>

          <FormCard>
            {submitted ? (
              <ThankYou>
                <div className="icon">🎅✅</div>
                <h3>Thanks — your inquiry is in!</h3>
                <p>
                  We'll get back to you shortly with availability and
                  pricing. Prefer email? Reach us at{" "}
                  <a href="mailto:hello@tailoredsanta.com">
                    hello@tailoredsanta.com
                  </a>
                  .
                </p>
              </ThankYou>
            ) : (
              <>
                {/* Works out of the box on Netlify (this site's deploy target).
                    Swap for your preferred form/email handler if hosting elsewhere. */}
                <Form
                  name="booking-inquiry"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/?inquiry=received"
                >
                  <input type="hidden" name="form-name" value="booking-inquiry" />
                  <p hidden>
                    <label>
                      Leave this empty: <input name="bot-field" />
                    </label>
                  </p>

                  <Field>
                    Your name
                    <input type="text" name="name" autoComplete="name" required />
                  </Field>
                  <Field>
                    Email
                    <input type="email" name="email" autoComplete="email" required />
                  </Field>
                  <Field>
                    Phone (optional)
                    <input type="tel" name="phone" autoComplete="tel" />
                  </Field>
                  <Field>
                    Preferred date
                    <input type="date" name="event_date" />
                  </Field>
                  <Field $full>
                    What are you planning?
                    <select name="event_type" defaultValue="">
                      <option value="" disabled>
                        Choose one…
                      </option>
                      <option>Photo session</option>
                      <option>Home visit</option>
                      <option>Community / mall event</option>
                      <option>Pet-friendly photos</option>
                      <option>Something else</option>
                    </select>
                  </Field>
                  <Field $full>
                    Will pets be present?
                    <select name="pets" defaultValue="">
                      <option value="" disabled>
                        Let us know…
                      </option>
                      <option>No pets</option>
                      <option>Yes — dog(s)</option>
                      <option>Yes — cat(s)</option>
                      <option>Yes — other pets</option>
                    </select>
                  </Field>
                  <Field $full>
                    Anything else we should know?
                    <textarea
                      name="message"
                      placeholder="Ages of children, accessibility or sensory needs, location, timing…"
                    />
                  </Field>
                  <Submit type="submit">Send my inquiry 🎄</Submit>
                </Form>

                <FormNote>
                  Prefer email? Reach us at{" "}
                  <a href="mailto:hello@tailoredsanta.com">
                    hello@tailoredsanta.com
                  </a>
                  .
                </FormNote>
              </>
            )}
          </FormCard>
        </Container>
      </Inquire>

      <Footer>
        <Container>
          <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "1.4rem" }}>
            Tailored Santa
          </p>
          <p>Custom-fit Santa visits, booked in a click.</p>
          <p>
            <a href="mailto:hello@tailoredsanta.com">hello@tailoredsanta.com</a>
          </p>
          <p style={{ opacity: 0.85, fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} tailoredsanta.com · Experiences &amp;
            Events
          </p>
        </Container>
      </Footer>
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <title>Tailored Santa — Book an inclusive, pet-friendly Santa for photos & events</title>
    <meta
      name="description"
      content="Book Lonnie Taylor, a warm, background-checked, ASL-fluent Santa for photo sessions, home visits, and events. Gentle with children and pets, and thoughtfully inclusive."
    />
    <meta name="theme-color" content="#df0714" />
  </>
)
