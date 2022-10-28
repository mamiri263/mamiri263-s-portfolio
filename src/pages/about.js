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
        <h1>Hi, I'm mamiri263</h1>
        <p>I'm your avarage highschool student who just has an interest in computer development.</p>
        <h2>Contact me:</h2>
        <ul>
          <li>discord: wyn#2006</li>
          <li><a style={linkStyles} href='mailto: mo7ammadamiri@gmail.com"'>email me</a></li>
        </ul>
      </Layout>
    </main>
  )
}


export const Head = () => <Seo title="About Me" />


// Export your component
export default AboutPage