import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import {FaInstagram,FaFacebook } from 'react-icons/fa'
const FollowUs = () => {
  return (
    <>
        <h3 className="content__title title1">Follow Us</h3>
        <div className="content__socialmedias">
            <p className="socialmedias__item item1 content__item"><FaFacebook style={{color:'blue'}}/> Facebook</p>
            <p className="socialmedias__item item2 content__item"><FaInstagram style={{color:'red'}}/>Instagram</p>
            <p className="socialmedias__item item3 content__item"><FaXTwitter style={{color:'white'}}/>Twitter</p>
        </div>
    </>
  )
}

export default FollowUs