// Import React
import * as React from 'react'
import Layout from '../components/layout'


// Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi, I'm mamiri263 I enjoy playing osu and watching movies mostly!</p>
      </Layout>
    </main>
  )
}


export const Head = () => (
  <>
    <meta name="description" content="Your description" />
    <title>About Me</title>
  </>
)

// Export your component
export default AboutPage