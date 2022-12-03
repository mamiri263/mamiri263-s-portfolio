// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {
  container,
} from '../components/layout.module.css'



const photography = () => {
  return (
    <main>
      <Layout>
      </Layout>
      <div className={container}>
        <h1>Photography</h1>
        <p>Photos will be coming soon...</p>
      </div>
    </main>
  )
}


export const Head = () => (
  <>
    <Seo title="photography" />
    <Seo />
  </>
)

// Export your component
export default photography