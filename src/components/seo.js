import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)

  return ( 
    <>
      <title>{title} | {data.site.siteMetadata.title}</title>
      <meta name="description" content={Seo.description} />
      <meta name="image" content={Seo.image} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🧀</text></svg>" />
    </>
  )
}

export default Seo