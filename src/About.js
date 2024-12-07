import React from 'react'
import './About.css'
import jamerul from './images/jamerul.png'
import { FaInstagram } from "react-icons/fa";
import { FiMail } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { useEffect,useState,useRef } from 'react';
const About = () => {
  const About = useRef(null);
    const msgOne = useRef(null);
    const msgTwo = useRef(null);
    const [isAboutVisible, setAboutVisible] = useState(false);
    const [ismsgOneVisible, setIsmsgOneVisible] = useState(false);
    const [ismsgTwoVisible, setIsmsgTwoVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.target === About.current) {
              setAboutVisible(entry.isIntersecting);
            }
            if (entry.target === msgOne.current) {
              setIsmsgOneVisible(entry.isIntersecting);
            }
            if (entry.target === msgTwo.current) {
              setIsmsgTwoVisible(entry.isIntersecting);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      if (About.current) {
        observer.observe(About.current);
      }
      if (msgOne.current) {
        observer.observe(msgOne.current);
      }
      if (msgTwo.current) {
        observer.observe(msgTwo.current);
      }
      return () => {
        if (About.current) {
          observer.unobserve(About.current);
        }
        if (msgOne.current) {
            observer.unobserve(msgOne.current);
          }
          if (msgTwo.current) {
            observer.unobserve(msgTwo.current);
          }
      };
    }, []);
  return (
    <main>
      <section className="content__About">
          <div ref={About} className={`About ${isAboutVisible ? 'animate' : ''}`}>
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
          </div>
          <div id='msg' className="msg">
            <div ref={msgOne} className={`msgOne ${ismsgOneVisible? 'animate' : ''}`}>
              <h2 className='msg__H1 msg__h'>
                Meet the Vision Behind the Mission.
              </h2>
              <p className='msg__P1 msg__p'>
                I'm Jamerul Hassan, the developer and creator behind JamerMobiles. As a passionate tech enthusiast and software developer, I’ve built this website to offer you an easy, seamless, and enjoyable shopping experience for all your mobile tech needs. My goal is to combine my love for technology with my skills in web development to create a site that’s not only functional but also engaging and user-friendly.
              </p>
            </div>
            <div ref={msgTwo} className={`msgTwo ${ismsgTwoVisible? 'animate' : ''}`}>
              <h2 className='msg__H2 msg__h'>
               Driven by Vision, Fueled by Passion.
              </h2>
              <p className="P2__content">
              As a developer, I’m constantly learning and improving my skills. I believe in building products that are not only functional but also provide real value to the people who use them. JamerMobiles is a reflection of my commitment to delivering a great user experience and my passion for both mobile technology and web development. <br />
              In addition to React, I continue to explore new technologies and stay up-to-date with the latest trends in mobile tech and web development. I’m dedicated to creating the best possible version of JamerMobiles and providing you with the most efficient and enjoyable shopping experience possible.
              </p>
          </div>
          </div>
      </section>
    </main>
  )
}

export default About