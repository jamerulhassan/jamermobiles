import React from 'react'
import Welcome from './Welcome'
import './content.css'
import IntroductionContentOne from './IntroductionContentOne'
import Disclimer from './Disclimer'
import BrandList from './BrandList'
const Content = () => {

  return (
    <main>
        <Welcome />
        <IntroductionContentOne />
        <BrandList />
        <Disclimer/>
    </main>
  )
}

export default Content