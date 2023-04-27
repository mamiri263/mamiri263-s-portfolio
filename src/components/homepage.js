import * as React from 'react'
import {
  mainContainer,
  aboutInfo,
  pics
} from './layout.module.css'


const Homepage = () => {

  return (
    <body>
      <div className={mainContainer}>
        <div className={aboutInfo}>
            <h1>Hello I'm <a target={"_blank"} style={{color: "gray"}}  href='https://github.com/mamiri263'>M</a></h1>
            <p>I have an interest in computer science.<br></br>I like things such as cats, music and messing with my friends.</p>
            <p>I play games such as csgo, minecraft and a lot of story games I also read manga.</p>
            <h2 id='contacts'>contacts</h2>
            <p>Email me <a style={{color: "gray"}} href='mailto: moh@mamiri263.com"'>here</a>.</p>
        </div>
      </div>
    </body>
  )
}

export default Homepage
