//  Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const HomePage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Hello this is my personal blog written in gatsby.js</p>
        <p>you can learn more about it by heading over to this page's <a target='_blank' href='https://github.com/mamiri263/mamiri263-portfolio'>github</a>!</p>
      </Layout>
    </main>
  )
}



export const Head = () => (
  <>
    <Seo title="Home Page" />
    <Seo />
  </>
)
// Export your component
export default HomePage