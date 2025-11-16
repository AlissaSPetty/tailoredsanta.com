import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1 style={headingStyles}>
      <span style={headingAccentStyles}>Home</span> Page
      </h1>
      </main>
  )
}

export default IndexPage
