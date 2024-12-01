import React from 'react'
import './welcome.css'
import { Parallax } from 'react-scroll-parallax';
const Welcome = () => {
  return (
      <div className="welcomeMsg">
        <Parallax speed={20}>
         <p className='welcomeMsg__Msg'>YOUR WORLD ANYWHERE <br/>ANYTIME</p>
        </Parallax>
      </div>
  )
}
export default Welcome