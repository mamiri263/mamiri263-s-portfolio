// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'



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


export const Head = () => <Seo title="About Me" />


// Export your component
export default AboutPage