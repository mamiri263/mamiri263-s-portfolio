// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'



// styles
const linkStyles = {
  color: "gray",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textDecoration: "none",
}
// Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <h1>Hi, I'm M Amiri</h1>
        <p>I'm a highschool school student in Kuwait and I have an interest in development.</p>
        <p>I like stuff like cats, music and messing with my friends.</p>
        <h2>Contact me</h2>
        <ul>
          <li>discord: wyn#2006</li>
          <li><a style={linkStyles} href='mailto: moh@mamiri263.com"'>Email</a></li>
        </ul>
        <h2>Official work</h2>
        <p>I am currently looking for a job as a software engineer; to receive my CV please email me.</p>
      </Layout>
    </main>
  )
}


export const Head = () => (
  <>
    <Seo title="About me" />
    <Seo />
  </>
)

// Export your component
export default AboutPage