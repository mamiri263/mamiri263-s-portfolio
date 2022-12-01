import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'

const Layout = ({ children }) => {

  return (
    <body>
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="../" className={navLinkText}>
                back
              </Link>
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
          {children}
        </main>
      </div>
    </body>
  )
}

export default Layout
