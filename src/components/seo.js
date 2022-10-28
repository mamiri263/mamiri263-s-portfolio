import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const Seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{Seo.title}</title>
      <meta name="description" content={Seo.description} />
      <meta name="image" content={Seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={Seo.title} />
      <meta name="twitter:url" content={Seo.url} />
      <meta name="twitter:description" content={Seo.description} />
      <meta name="twitter:image" content={Seo.image} />
      <meta name="twitter:creator" content={Seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
    </>
  )
}
