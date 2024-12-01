import React from 'react'
import './Disclimer.css'
import { FaCircleInfo } from 'react-icons/fa6'
import { Parallax } from 'react-scroll-parallax'
const Disclimer = () => {
  return (
    <section className="Disclimer">
      <Parallax speed={20}>
        <div className="Disclimer__Div">
          <h2 className='Disclimer__heading'>DISCLIMER</h2>
          <div className="Disclimer__content">
            <h3 className='content__h'>Security:</h3>
            <p className='content__para'><FaCircleInfo/> Devices must comply with company security policies</p>
            <h3 className='content__h'>Liability:</h3>
            <p className='content__para'><FaCircleInfo/> You're responsible for any personal charges and reporting lost or damaged phones</p>
            <h3 className='content__h'>Compliance:</h3>
            <p className='content__para'><FaCircleInfo/> Follow all company policies and applicable laws when using the device</p>
          </div>
        </div>
      </Parallax>
    </section>
  )
}
export default Disclimer