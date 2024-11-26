import React from 'react'
import './help.css'
import {FaFacebook, FaInstagram, FaPhone, FaXTwitter } from 'react-icons/fa6'
const Help = () => {
  return (
    <main>
        <section className='Help'>
            <div className='Help__content1'>
                <div className="content__mail">
                    <div className='mail'>
                        <p>Email:contact@jamermobiles.in</p>
                    </div>
                </div>
                <div className="content__phone">
                    <h2 className='content__phone'><FaPhone/>+91 11 2345 6789</h2>
                </div>
                <div className="content__socialMedia">
                    <FaInstagram size={40}/>
                    <FaFacebook size={40}/>
                    <FaXTwitter size={40}/>
                </div>
            </div>
            <div className='Help__Content2 content'>
                <h2 className="content2__heading">Contact Our Support Team</h2>
                <p className="content2__p">We’re happy to assist you personally! Whether you prefer to reach us by email, phone, or live chat, we’re here to make your experience as smooth as possible.
                </p>
            </div>
            <div className='Help__Content3  content' >
                <h2 className="content3__heading">Thank You for Choosing jamermobiles!</h2>
                <p className="content3__p">
                    We appreciate your business and look forward to assisting you with all your mobile and tech needs.
                </p>
            </div>
        </section>
    </main>
  )
}

export default Help