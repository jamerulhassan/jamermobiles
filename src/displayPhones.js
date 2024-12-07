import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const DisplayPhones = (phoneImageName,phoneName,phoneRamRom,phoneResolution,phoneCamera,phoneBattery,phoneProcessor,phonePrice,handleVisit) => {
  const phoneToCheck=useRef(null)
  const [isPhoneIsVisible,setIsPhoneIsVisible]=useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                  setIsPhoneIsVisible(true)
                }
                else{
                  setIsPhoneIsVisible(false)
                }
            });
        },
        {
            threshold: 0.5,
        }
    );
    if (phoneToCheck.current) observer.observe(phoneToCheck.current);
    return () => {
        if (phoneToCheck.current) observer.unobserve(phoneToCheck.current);
    };
  }, []);
  return (
    < div ref={phoneToCheck} className={`phones ${isPhoneIsVisible ? 'animate' : ''}`}>
              <figure className='mobile__figure figure1'>
                <img src={phoneImageName} 
                alt="phoneImageName"
                title="phoneImageName"
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption'>
                <h1 className='nameOfMobile'>{phoneName}</h1>
                <p className='mobileRamRom'>{phoneRamRom}</p>
                <p className='mobileResolution'>{phoneResolution}</p>
                <p className='mobileCamera'>{phoneCamera}</p>
                <p className='mobileBattery'>{phoneBattery}</p>
                <p className='mobileOs'>{phoneProcessor}</p>
              </figcaption>
              <h2 className='price'>Rs. {phonePrice}</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
    </div>
  )
}

export default DisplayPhones