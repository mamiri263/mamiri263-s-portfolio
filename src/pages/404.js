import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/seo'

// styles
const pageStyles = {
  color: "#eee",
  fontColor: "#eee",
  padding: "96px",
  linkColor: "rgb(112, 165, 183)",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "rgb(11, 15, 25)"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "rgb(11, 15, 25)",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <body style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
      <p>If you think this is a problem please contact wyn#2006 on discord</p>
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </body>
  )
}

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
