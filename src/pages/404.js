import * as React from "react"
import { Link } from 'gatsby'
import Seo from '../components/seo'


const NotFoundPage = () => {
  return (
    <main>
      <p>wrong page bro</p>
      <Link style={{color: "gray"}} to="/">click here to go to the home page</Link>
    </main>
  )
}

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
