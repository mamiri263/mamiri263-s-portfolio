//  Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'




//  Define your component

const HomePage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Hello this is my personal blog written in gatsby.js</p>
        <p>you can learn more about it by heading over to this page's github!</p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

// Export your component
export default HomePage