import React from 'react'
import Welcome from './Welcome'
import './content.css'
import Intruduction from './Intruduction'
import Collections from './Collections'
const Content = () => {

  return (
    <main>
      <Welcome /> 
      <Intruduction />
      <Collections />
    </main>
  )
}

export default Content