import React from 'react'
import './About.css'
import jamerul from './images/jamerul.png'
import { FaInstagram, FaTwitter } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
  return (
    <main>
      <section className="content__About">
          <div className="About">
            <figure className='About__img'>
              <img src={jamerul} 
              alt="JAMERUl HASSAN"
              title="JAMERUL HASSAN"
              width={"100px"}
              height={"100px"}
              />
            </figure>
            <figcaption className='About__figcaption'>
              <h1>V Jamerul Hassan</h1>
              <h3>Developer</h3>
              <div className="figcaption__media">
                <a href="https://www.instagram.com/jame_rul_hassan_/"><FaInstagram size={30}/></a>
                <a href="https://x.com/jame_rul_hassan?t=DE-FBD7Xq1RhvQsKo5UdBw&s=08"><FaXTwitter size={30}/></a>
                <a href='mailto:jamerulhassan2k04@gmail.com'><FiMail size={30}/></a>
              </div>
            </figcaption>
          </div>
          <div className="msg">
              <h2 className='msg__H1 msg__h'>
                Hello, and welcome to JamerMobiles!
              </h2>
              <p className='msg__P1 msg__p'>
                I'm Jamerul Hassan, the developer and creator behind JamerMobiles. As a passionate tech enthusiast and software developer, I’ve built this website to offer you an easy, seamless, and enjoyable shopping experience for all your mobile tech needs. My goal is to combine my love for technology with my skills in web development to create a site that’s not only functional but also engaging and user-friendly.
              </p>
              <h2 className='msg__H2 msg__h'>
                What Drives Me
              </h2>
              <p className='msg__P2 msg__p'>
                As a developer, I’m constantly learning and improving my skills. I believe in building products that are not only functional but also provide real value to the people who use them. JamerMobiles is a reflection of my commitment to delivering a great user experience and my passion for both mobile technology and web development. <br />
                In addition to React, I continue to explore new technologies and stay up-to-date with the latest trends in mobile tech and web development. I’m dedicated to creating the best possible version of JamerMobiles and providing you with the most efficient and enjoyable shopping experience possible.
            </p>
          </div>
      </section>
    </main>
  )
}

export default About