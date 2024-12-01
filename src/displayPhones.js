import React from 'react'
import { Link } from 'react-router-dom'
const displayPhones = (phoneImageName,phoneName,phoneRamRom,phoneResolution,phoneCamera,phoneBattery,phoneProcessor,phonePrice,handleVisit) => {
  return (
    <>
              <figure className='mobile__figure figure1'>
                <img src={phoneImageName} 
                alt="phoneImageName"
                title="phoneImageName"
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1 className='nameOfMobile'>{phoneName}</h1>
                <p className='mobileRamRom'>{phoneRamRom}</p>
                <p className='mobileResolution'>{phoneResolution}</p>
                <p className='mobileCamera'>{phoneCamera}</p>
                <p className='mobileBattery'>{phoneBattery}</p>
                <p className='mobileOs'>{phoneProcessor}</p>
              </figcaption>
              <h2 className='price'>Rs. {phonePrice}</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
    </>
  )
}

export default displayPhones