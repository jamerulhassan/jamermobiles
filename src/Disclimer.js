import React from 'react'
import './disclimer.css'
import { FaCircleInfo } from 'react-icons/fa6'
const Disclimer = () => {
  return (
    <section className="Disclimer">
      <div className="Disclimer__Div">
        <h2 className='Disclimer__heading'>Phone Purchase Disclaimer</h2>
        <div className="Disclimer__content">
          <h3 className='content__h'>Security:</h3>
          <p className='content__para'><FaCircleInfo/> Devices must comply with company security policies</p>
          <h3 className='content__h'>Liability:</h3>
          <p className='content__para'><FaCircleInfo/> You're responsible for any personal charges and reporting lost or damaged phones</p>
          <h3 className='content__h'>Compliance:</h3>
          <p className='content__para'><FaCircleInfo/> Follow all company policies and applicable laws when using the device</p>
        </div>
      </div>
    </section>
  )
}
export default Disclimer