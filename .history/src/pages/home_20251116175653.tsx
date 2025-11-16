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

const HomePage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img src="src/images/tailored-santa-banner.png" alt="Tailored Santa Banner" />
      <h1 style={headingStyles}>Tailored Santa</h1>
    </main>
  )
}

export default HomePage
