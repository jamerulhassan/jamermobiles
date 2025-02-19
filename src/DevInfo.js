import React from 'react'
import jamerul from './images/jamerul.png'
import { FaInstagram } from "react-icons/fa";
import { FiMail } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const DevInfo = () => {
  return (
    <>
        <figure className='About__img'>
              <img src={jamerul} 
              className='img__dev'
              alt="JAMERUl HASSAN"
              title="JAMERUL HASSAN"
              width="100px"
              height="100px"
              />
            </figure>
            <figcaption className='About__figcaption'>
              <h1>V Jamerul Hassan</h1>
              <h3>Developer</h3>
              <div className="figcaption__media">
                <a href="https://www.instagram.com/jame_rul_hassan_/"><FaInstagram className='media__logo' size={40}/></a>
                <a href="https://x.com/jame_rul_hassan?t=DE-FBD7Xq1RhvQsKo5UdBw&s=08"><FaXTwitter className='media__logo' size={40}/></a>
                <a href='mailto:jamerulhassan2k04@gmail.com'><FiMail className='media__logo' size={40}/></a>
              </div>
            </figcaption>
            <div className="navigationOfAbout">
              <a href="#msg">
                <p>SCROLL DOWN</p>
                <FaChevronDown />
              </a>
            </div>
    </>
  )
}

export default DevInfo