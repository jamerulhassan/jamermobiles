import React from 'react'
import './About.css'
import DevInfo from '../../Components/aboutPageComponents/DevInfo';
import { useEffect,useState,useRef } from 'react';
import DevVoice from '../../Components/aboutPageComponents/DevVoice';
import DevVision from '../../Components/aboutPageComponents/DevVision';
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
      
    }, []);
  return (
    <main>
      <section className="content__About">
          <div ref={About} className={`About ${isAboutVisible ? 'animate' : ''}`}>
            <DevInfo />
          </div>
          <div id='msg' className="msg">
            <div ref={msgOne} className={`msgOne ${ismsgOneVisible? 'animate' : ''}`}>
              <DevVoice/>
            </div>
            <div ref={msgTwo} className={`msgTwo ${ismsgTwoVisible? 'animate' : ''}`}>
              <DevVision />
            </div>
          </div>
      </section>
    </main>
  )
}

export default About