import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
  container,
} from '../components/layout.module.css'

const NotFoundPage = () => {
  return (
    <main>
      <Layout></Layout>
      <div className={container}>
        <h1>404 error: page not found :/</h1>
        <Link to="/" style={{color: "gray", fontSize:"20px"}}>click here to return to homepage</Link>
      </div>
    </main>
  )
}

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
