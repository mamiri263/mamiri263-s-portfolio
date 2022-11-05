import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'
import DarkMode from "./DarkMode";
import CookieConsent from 'react-cookie-consent';


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <body>
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li>
              <DarkMode />
            </li>
          </ul>
          <hr
            style={{
              color: "white",
              backgroundColor: "white",
            }}
          />
        </nav>

        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
      <footer>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-cloudflare-analytics">
          This site uses cookies to get analytics to help the developers.
        </CookieConsent>
      </footer>
    </body>
  )
}

export default Layout
