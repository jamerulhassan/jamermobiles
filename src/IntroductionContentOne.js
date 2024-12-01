import React from 'react'
import './introductionContentOne.css'
import { Parallax } from 'react-scroll-parallax'
const IntroductionContentOne = () => {
  return (
    <div className="introduction__content">
      <Parallax speed={30}>
      <div className="content__company">
        <h2 className='content__h2'>WELCOME</h2>
        <p className='content__p'>
        We offer a curated selection of high-quality smartphones at great prices. Shop now and discover something special today! With top brands and the latest models, you're sure to find the perfect phone. Enjoy fast delivery, secure payments, and excellent customer service. Your next smartphone is just a click away!
        </p>
      </div>
      </Parallax>
      
    </div> 
  )
}

export default IntroductionContentOne