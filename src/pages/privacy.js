// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Privacy from '../components/privacyInfo'



const Likes = () => {
  return (
    <main>
      <Layout>
      </Layout>
      <Privacy>
      </Privacy>
    </main>
  )
}


export const Head = () => (
  <>
    <Seo title="...." />
    <Seo />
  </>
)

// Export your component
export default Likes