import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  backgroundColor: "#FFD2E1",
  height: "100vh",
  fontFamily: "Bright, sans-serif",
  src: `url('/src/fonts/Bright.otf') format('opentype')`,
}

const HomePage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img src="src/images/tailored-santa-banner.png" alt="Tailored Santa Banner" />
      <h1>alissa shay</h1>
    </main>
  )
}

export default HomePage
