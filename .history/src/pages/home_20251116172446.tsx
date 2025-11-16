import * as React from "react"
import type { HeadFC, PageProps, pageStyles } from "gatsby"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
      <span style={headingAccentStyles}>Home</span> Page
      </h1>
      </main>
  )
}

export default IndexPage
