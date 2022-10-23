//  Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


//  Define your component
const HomePage = () => {
  return (
    <main>
    <Layout pageTitle="Home Page">
      <p>Hello welcome to my portfolio. Home page still in progress!</p>
    </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

// Export your component
export default HomePage