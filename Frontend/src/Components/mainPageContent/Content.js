import React from 'react'
import './content.css'
import wallpaperThree from '../../images/wallpaperThree.jpg'
import IntroductionContentOne from './insideContent/IntroductionContentOne'
import CompanyParameter from './insideContent/CompanyParameter'
import BrandList from './insideContent/BrandList'
import { IoIosArrowDown } from "react-icons/io";
import { useRef,useEffect,useState } from 'react'
const Content = () => {
  const elementToCheckRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (elementToCheckRef.current) {
      observer.observe(elementToCheckRef.current);
    }
    
  }, []);
  return (
    <main>
       <div className="welcome__div">
        <div  className='div__content' >
          <IntroductionContentOne />
          <div className="imgOfCompany">
            <figure>
              <img 
              src={wallpaperThree} 
              alt="shop"
              title="shop"
              width='200px'
              height='200px'
              />
            </figure>
          </div>
        </div>
       </div>
       <div className="informationDiv">
        <div className="information__Content">
          <p ref={elementToCheckRef} className={`informationOne ${isVisible ? 'animate' : ''}`} ><q>this is jrmobiles for you</q></p>
        </div>
        <span className="navigation">
          <a href="#parameter__content"><p className='scrollDown'>Scroll Down</p><IoIosArrowDown /></a>
        </span>
       </div>
        <div id='parameter__content' className="parameter__content">
          <CompanyParameter/>
       </div>
       <div className="brandsDiv">
        <BrandList />
       </div>
    </main>
  )
}

export default Content