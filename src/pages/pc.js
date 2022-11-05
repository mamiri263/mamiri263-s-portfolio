
//  Import React
import * as React from 'react'
import Seo from '../components/seo'


const RedirectPage = () => {
    React.useEffect(() => {
      window.location.replace('https://pcpartpicker.com/list/tCNqXy')
    }, [])
  }

export const Head = () => (
    <>
      <Seo title="PC parts i want to buy" />
      <Seo />
    </>
  )
  // Export your component
  export default RedirectPage