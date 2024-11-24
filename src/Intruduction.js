import React, { useState } from 'react'
import  './introduction.css'
import DemoPic from './DemoPic'
import IntroductionContentOne from './IntroductionContentOne'
const Intruduction = () => {
  return (
    <section className='introduction'>
        <div className='intro introductionDivOne'>
          <IntroductionContentOne />
        </div>
        <div className="intro introductionDivTwo">
          <DemoPic />
        </div>
    </section>
  )
}

export default Intruduction