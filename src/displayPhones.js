import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const DisplayPhones = ({ mobile, handleVisit ,API_URL,individual}) => {
  const phoneToCheck = useRef(null);
  const [isPhoneIsVisible, setIsPhoneIsVisible] = useState(false);  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsPhoneIsVisible(true);
          } else {
            setIsPhoneIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (phoneToCheck.current) observer.observe(phoneToCheck.current);
  }, []);
  const getFieldValue = (fieldName) => {
    return mobile?.[fieldName]?.stringValue || 'N/A';
  };
  return (
    <div  ref={phoneToCheck} className={`phones ${isPhoneIsVisible ? 'animate' : ''}`}>
      <figure className="mobile__figure figure1">
        <img
          src={getFieldValue('mobileImage')}
          alt={getFieldValue('mobileName')}
          title={getFieldValue('mobileName')}
          width="200px"
          height="200px"
        />
      </figure>
      <figcaption className="mobile__figurecaption figurecaption">
        <h1 className="nameOfMobile">{getFieldValue('mobileName')}</h1>
        <p className="mobileRamRom">{getFieldValue('mobileRamRom')}</p>
        <p className="mobileResolution">{getFieldValue('mobileResolution')}</p>
        <p className="mobileCamera">{getFieldValue('mobileCamera')}</p>
        <p className="mobileBattery">{getFieldValue('mobileBattery')}</p>
        <p className="mobileOs">{getFieldValue('mobileOs')}</p>
      </figcaption>
      <h2 className="price">{getFieldValue('mobilePrice')}</h2>
      <h2 className="visit" onClick={(e) => handleVisit(mobile)}>
        <Link to="BuyPage">Visit</Link>
      </h2>
    </div>
  );
}

export default DisplayPhones;