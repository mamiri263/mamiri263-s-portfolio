//  Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



//  Define your component
const kokoImage = {
  height: "400px",
}

const HomePage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Hello welcome to my portfolio. Home page still in progress!</p>
        <StaticImage style={kokoImage}
          alt="My pet koko smiling"
          src="../images/kokoHi.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

// Export your component
export default HomePage