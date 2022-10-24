//  Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'




//  Define your component
const kokoImage = {
  height: "400px",
}

const HomePage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>This webpage was made using gatsby(really recommended)</p>
        <StaticImage style={kokoImage}
          alt="My pet koko smiling"
          src="../images/kokoHi.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

// Export your component
export default HomePage