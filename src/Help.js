import React from 'react'
import './help.css'
import { FaChevronDown } from "react-icons/fa";
import {FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { useState,useEffect,useRef } from 'react';
const Help = () => {
    const slogan = useRef(null);
    const contact__slogan = useRef(null);
    const contact__ways = useRef(null);
    const socialmedia__slogan = useRef(null);
    const socialmedia = useRef(null);
    const [isSloganVisible, setSloganIsVisible] = useState(false);
    const [isContactSloganVisible, setIsContactSloganVisible] = useState(false);
    const [isContactWaysVisible, setIsContactWaysVisible] = useState(false);
    const [isSocialmediaSloganVisible, setIsSocialmediaSloganVisible] = useState(false);
    const [isSocialmediaVisible, setIsSocialmediaVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.target === slogan.current) {
                setSloganIsVisible(entry.isIntersecting);
            }
            if (entry.target === contact__slogan.current) {
                setIsContactSloganVisible(entry.isIntersecting);
            }
            if (entry.target === contact__ways.current) {
                setIsContactWaysVisible(entry.isIntersecting);
            }
            if (entry.target === socialmedia__slogan.current) {
                setIsSocialmediaSloganVisible(entry.isIntersecting);
            }
            if (entry.target === socialmedia.current) {
                setIsSocialmediaVisible(entry.isIntersecting);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      if (slogan.current) {
        observer.observe(slogan.current);
      }
      if (contact__slogan.current) {
        observer.observe(contact__slogan.current);
      }
      if (contact__ways.current) {
        observer.observe(contact__ways.current);
      }
      if (socialmedia__slogan.current) {
        observer.observe(socialmedia__slogan.current);
      }
      if (socialmedia.current) {
        observer.observe(socialmedia.current);
      }
      return () => {
        if (slogan.current) {
          observer.unobserve(slogan.current);
        }
        if (contact__slogan.current) {
            observer.unobserve(contact__slogan.current);
          }
          if (contact__ways.current) {
            observer.unobserve(contact__ways.current);
          }
          if (socialmedia__slogan.current) {
            observer.unobserve(socialmedia__slogan.current);
          }
          if (socialmedia.current) {
            observer.unobserve(socialmedia.current);
          }
      };
    }, []);
  return (
    <main>
        <section className="help">
           <div className="help__welcomeMsg help__contentDivs">
                <div ref={slogan} className={`slogan ${isSloganVisible ? 'animate' : ''}`}>
                    <p>Need Help? You’re in the Right Place!</p>
                </div>
                <div className="navigationArrow">
                    <a href="#helpContent">
                        <p>SCROLL DOWN</p>
                        <FaChevronDown />
                    </a>
                </div>
            </div>
            <div id='helpContent' className="help__contact help__contentDivs">
                <div className="contact__msg">
                    <p ref={contact__slogan} className={`contact__slogan ${isContactSloganVisible ? 'animate' : ''}`}>
                    We’re On It – Let’s Get This Sorted!
                    </p>
                </div>
                <div className="contact__Information">
                    <p className="contact__title">
                        CONTACT
                    </p>
                    <div ref={contact__ways} className={`contact__ways ${isContactWaysVisible ? 'animate' : ''}`}>
                        <h3 className="email__title">
                            Email:contact@jamermobiles.in
                        </h3>
                        <h3 className="Phone__title">
                            Phone:+91 11 2345 6789
                        </h3>
                        <h3 className="service__title">
                        Service Hours:Monday-Friday, 9 AM - 6 PM
                        </h3>
                    </div>
                </div>
            </div>
            <div className="help__socialmediaDivs help__contentDivs">
                <div ref={socialmedia__slogan} className={`socialmedia__slogan ${isSocialmediaSloganVisible ? 'animate' : ''}`}>
                    <p>Stuck? Chat with us on social for instant help!</p>
                </div>
                <div ref={socialmedia} className={`socialmedia ${isSocialmediaVisible ? 'animate' : ''}`}>
                    <FaInstagram  className='socialMedia__logo' />
                    <FaFacebook  className='socialMedia__logo' />
                    <FaXTwitter  className='socialMedia__logo' />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Help