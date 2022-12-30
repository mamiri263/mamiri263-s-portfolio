
//  Import React
import * as React from 'react'
import Seo from '../components/seo'


const RedirectPage = () => {
    React.useEffect(() => {
      window.location.replace('https://pcpartpicker.com/list/HFRZ3y')
    }, [])
  }

export const Head = () => (
    <>
      <Seo title="my current pc" />
      <Seo />
    </>
  )
  // Export your component
  export default RedirectPage