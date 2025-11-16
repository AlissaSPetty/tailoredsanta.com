import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  backgroundColor: "#FFD2E1",
  height: "100vh",
  fontFamily: "Bright, sans-serif",
  src: `url('/src/fonts/Bright.otf') format('opentype')`,
}

  const headingStyles = {
    fontSize: "4rem",
    textAlign: "center" as const,
    fontFamily: "Bright, sans-serif",
    src: `url('/src/fonts/Bright.otf') format('opentype')`,
    color: "#DF0714",
}

const paragraphStyles = {
  fontSize: "1.5rem",
  textAlign: "center" as const,
  color: "#DF0714",
  marginTop: "1rem",
}

const HomePage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img src="src/images/tailored-santa-banner.png" alt="Tailored Santa Banner" />
      <h1 style={headingStyles}>Tailored Santa</h1>
      <p style={paragraphStyles}>Custom‑fit Santa visits, booked in a click.</p>
      <p style={paragraphStyles}><i>A Santa that is ready to fit your needs</i></p>
      <p style={paragraphStyles}>Meet Lonnie Taylor, one of Santa's special helpers who is exited to become Santa at your next event and share his boundless Christmas cheer with every child he meets. Lonnie is a Santa who can seamlessly adapt to any holiday setting. Special‑needs friendly: He knows how to create a calm, sensory‑aware environment, works comfortably with wheelchairs, and uses gentle, patient communication techniques. Sign‑language fluent: Certified in American Sign Language, he can greet, converse, and read stories in ASL so deaf and hard‑of‑hearing children feel fully included.</p>

    </main>
  )
}

export default HomePage
