import * as React from 'react'
import { Link } from 'gatsby'
import {
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  homePageLink,
} from './layout.module.css'
import CookieConsent from 'react-cookie-consent';


const Layout = ({ children }) => {
  return (
    <body>
      <div className={nav}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={homePageLink}>
                mamiri263
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/photography" className={navLinkText}>
                Photography
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/privacy" className={navLinkText}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </nav>
        <main>
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
