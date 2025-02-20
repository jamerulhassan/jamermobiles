import React from 'react'
import {FaCircleInfo} from 'react-icons/fa6'
const Disclimer = () => {
  return (
    <>
        <h1 >Disclaimer</h1>
        <h3>Security:</h3>
        <p className='additionalDetails__security additionalDetails__disclimer'><FaCircleInfo/> Devices must comply with company security policies</p>
        <h3>Liability:</h3>
        <p className='additionalDetails__liability additionalDetails__disclimer'><FaCircleInfo/> You're responsible for any personal charges and reporting lost or damaged phones</p>
        <h3>Compliance:</h3>
        <p className='additionalDetails__compliance additionalDetails__disclimer'><FaCircleInfo/> Follow all company policies and applicable laws when using the device</p>
    </>
  )
}

export default Disclimer