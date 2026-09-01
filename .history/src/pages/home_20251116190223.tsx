import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  backgroundColor: "#FFD2E1",
  height: "100vh",
  fontFamily: "Bright, sans-serif",
  src: `url('/src/fonts/Bright.otf') format('opentype')`,
  padding: "2rem",
}

  const headingStyles = {
    fontSize: "4rem",
    textAlign: "center" as const,
    fontFamily: "Bright, sans-serif",
    src: `url('/src/fonts/Bright.otf') format('opentype')`,
    color: "#DF0714",
}

const paragraphStyles = {
  fontSize: "1.2rem",
  textAlign: "left" as const,
  color: "#DF0714",
  margin: "1rem",
}

const listItemStyles = {
  textAlign: "left" as const,
  fontSize: "1.2rem",
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
      <p style={paragraphStyles}>Meet Lonnie Taylor, one of Santa's special helpers who is exited to become Santa at your next event and share his boundless Christmas cheer with every child he meets. <br /> Lonnie is a Santa who can seamlessly adapt to any holiday setting. Whether it's a bustling mall, a cozy home visit, or a community gathering, Lonnie brings joy and magic to all. <br />What makes Lonnie truly special is his dedication to inclusivity and making sure every child feels the wonder of the season.
        <ul style={listItemStyles}>
          <li>
            <b>Special‑needs friendly:</b> He knows how to create a calm, sensory‑aware environment, works comfortably with wheelchairs, and uses gentle, patient communication techniques. </li>
          <li><b>Sign‑language fluent:</b> Certified in American Sign Language, he can greet, converse, and read stories in ASL so deaf and hard‑of‑hearing children feel fully included.</li>
        </ul>
        </p>
      <p style={paragraphStyles}>Book Lonnie Taylor as your Santa today and give your event the gift of a truly personalized and magical holiday experience!</p>
      <button onClick={() => window.location.href = 'https://tailoredsanta.bookerbee.com'}
       style={paragraphStyles}>Book Now</button>

    </main>
  )
}

export default HomePage
