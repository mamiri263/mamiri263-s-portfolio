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
            <p>I'm studying as a freshman in Kuwait and I have an interest in computer science.<br></br>I like things such as cats, music and messing with my friends.</p>
            <p>I play games like <a style={{color: "gray"}} target="_blank" href='https://osu.ppy.sh/users/31195394'>osu</a> and minecraft and I read manga.</p>
            <h2 id='contacts'>contacts</h2>
            <p>You may contact me on discord: wyn#1337 or email me <a style={{color: "gray"}} href='mailto: moh@mamiri263.com"'>here</a>.</p>
        </div>
      </div>
    </body>
  )
}

export default Homepage
