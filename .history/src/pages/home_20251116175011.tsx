import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  backgroundColor: "#FFD2E1",
  height: "100vh",
  fontFamily: "/src/fonts/Bright.otf"
}

const HomePage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img src="src/images/tailored-santa-banner.png" alt="Tailored Santa Banner" />
    </main>
  )
}

export default HomePage
