import React from 'react'
import { Link } from 'react-router-dom';
import './BrandList.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useRef,useState,useEffect } from 'react';
/* const BrandList = () => {
    const Collections__heading = useRef(null);
    const vivo__caption__p = useRef(null);
    const samsung__caption__p = useRef(null);
    const realme__caption__p = useRef(null);
    const poco__caption__p = useRef(null);
    const apple__caption__p = useRef(null);
    const onePlus__caption__p = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVivoVisible, setIsVivoVisible] = useState(false);
    const [isSamsungVisible, setIsSamsungVisible] = useState(false);
    const [isRealmeVisible, setIsRealmeVisible] = useState(false);
    const [isPocoVisible, setIsPocoVisible] = useState(false);
    const [isAppleVisible, setIsAppleVisible] = useState(false);
    const [isOnePlusVisible, setIsOnePlusVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.target === Collections__heading.current) {
                setIsVisible(entry.isIntersecting);
            }
            if (entry.target === vivo__caption__p.current) {
                setIsVivoVisible(entry.isIntersecting);
            }
            if (entry.target === samsung__caption__p.current) {
                setIsSamsungVisible(entry.isIntersecting);
            }
            if (entry.target === realme__caption__p.current) {
                setIsRealmeVisible(entry.isIntersecting);
            }
            if (entry.target === poco__caption__p.current) {
                setIsPocoVisible(entry.isIntersecting);
            }
            if (entry.target === apple__caption__p.current) {
                setIsAppleVisible(entry.isIntersecting);
            }
            if (entry.target === onePlus__caption__p.current) {
                setIsOnePlusVisible(entry.isIntersecting);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      if (Collections__heading.current) {
        observer.observe(Collections__heading.current);
      }
      if (vivo__caption__p.current) {
        observer.observe(vivo__caption__p.current);
      }
      if (samsung__caption__p.current) {
        observer.observe(samsung__caption__p.current);
      }
      if (realme__caption__p.current) {
        observer.observe(realme__caption__p.current);
      }
      if (poco__caption__p.current) {
        observer.observe(poco__caption__p.current);
      }
      if (apple__caption__p.current) {
        observer.observe(apple__caption__p.current);
      }
      if (onePlus__caption__p.current) {
        observer.observe(onePlus__caption__p.current);
      }
      
    }, []);
  return (
         <div className="Collections">
            <div className='headingOfCollection'>
                <h1 ref={Collections__heading} className={`Collections__heading ${isVisible ? 'animate' : ''}`}>OUR COLLECTIONS</h1>
                <div className="downarrow">
                     <a href="#brandNames"><p>Scroll Down <br /><IoIosArrowDown size={30} /></p></a>
                </div>
            </div>
            <div id='brandNames' className="BrandNamesDiv">
                <div id='collectionItems' className="collections__items">
                    <div className="items__group">
                        <div className="item card">
                            <Link to='/vivopage'>
                            <div className='vivo__caption caption'>
                                <p ref={vivo__caption__p} className={`vivo__caption__p ${isVivoVisible ? 'animate' : ''}`}>vivo</p>
                            </div>
                            </Link>
                        </div>
                        <div className="backCard card">
                            <Link to='/vivopage'><p>Rs. 7,998</p></Link>
                        </div>
                    </div>
                    <div className="items__group">
                        <div className="item card ">
                            <Link to='/samsung'>
                            <div className='samsung__caption caption'>
                            <p ref={samsung__caption__p} className={`samsung__caption__p ${isSamsungVisible ? 'animate' : ''}`}>Samsung</p>
                            </div>
                            </Link>
                        </div>
                        <div className="backCard card">
                            <Link to='/samsung'><p>Rs. 9,999</p></Link>
                        </div>
                    </div>
                    <div className="items__group">
                        <div className="item card">
                            <Link to='/realme'>
                            <div className='realme__caption caption'>
                                <p ref={realme__caption__p} className={`realme__caption__p ${isRealmeVisible ? 'animate' : ''}`}>Realme</p>
                            </div>
                            </Link>
                        </div>
                        <div className="backCard card">
                            <Link to='/realme'><p>Rs. 8,499</p></Link>
                        </div>
                    </div>
                    <div className="items__group">
                        <div className="item card">
                            <Link to='/poco'>
                            <div className='poco__caption caption'>
                                <p ref={poco__caption__p} className={`poco__caption__p ${isPocoVisible ? 'animate' : ''}`}>Poco</p>
                            </div>
                            </Link>
                        </div>
                        <div className="backCard card">
                            <Link to='/poco'><p>Rs. 7,999</p></Link>
                        </div>
                    </div>
                    <div className="items__group">
                        <div className="item card">
                            <Link to='/apple'>
                            <div className='apple__caption caption'>
                                <p ref={apple__caption__p} className={`apple__caption__p ${isAppleVisible ? 'animate' : ''}`}>Apple</p>
                            </div>
                            </Link>
                        </div>
                        <div className="backCard card">
                            <Link to='/apple'><p>Rs. 54,900</p></Link>
                        </div>
                    </div>
                    <div className="items__group">
                        <div className="item card">
                            <Link to='/onePlus'>
                            <div className='onePlus__caption caption'>
                                <p ref={onePlus__caption__p} className={`onePlus__caption__p ${isOnePlusVisible ? 'animate' : ''}`}>OnePlus</p>
                            </div>
                            </Link>
                        </div>
                        <div className="backCard card">
                            <Link to='/onePlus'><p>Rs. 19,999</p></Link>
                        </div>
                    </div> 
                </div>
            </div>      
        </div>
  )
}
export default BrandList */

const BrandList = () => {
const Brands=[
    {id:1,name: 'Vivo', price: 7998,route:'/vivopage'},
    {id:2,name: 'Samsung', price: 9999,route:'/samsung'},
    {id:3,name: 'Realme', price: 8499,route:'/realme'},
    {id:4,name: 'Poco', price: 7999,route:'/poco'},
    {id:5,name: 'Apple', price: 54900,route:'/apple'},
    {id:6,name: 'OnePlus', price: 19999,route:'/onePlus'}]
 const Collections__heading = useRef(null);
    const mobile_caption_p = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileNameVisible, setIsMobileNameVisible] = useState(false);
useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.target === Collections__heading.current) {
                setIsVisible(entry.isIntersecting);
            }
             if (entry.target === mobile_caption_p.current) {
                setIsMobileNameVisible(entry.isIntersecting);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      if (Collections__heading.current) {
        observer.observe(Collections__heading.current);
      }
      if (mobile_caption_p.current) {
        observer.observe(mobile_caption_p.current);
      }
      
    }, []);

 return (
                <div className="Collections">
                    <div className='headingOfCollection'>
                        <h1 ref={Collections__heading} className={`Collections__heading ${isVisible ? 'animate' : ''}`}>OUR COLLECTIONS</h1>
                        <div className="downarrow">
                            <a href="#brandNames"><p>Scroll Down <br /><IoIosArrowDown size={30} /></p></a>
                        </div>
                    </div>
                    <div id='brandNames' className="BrandNamesDiv">
                        <div id='collectionItems' className="collections__items">
                            {
                            Brands.map((brand)=>(
                                    <div className="items__group" key={brand.id} >
                                        <div className="item card">
                                            <Link to={brand.route}>
                                            <div className='onePlus__caption caption'>
                                                {<p ref={mobile_caption_p} className={`mobile_caption_p ${isMobileNameVisible ? 'animate' : ''}`}>{brand.name}</p>}
                                            </div>
                                            </Link>
                                        </div>
                                        <div className="backCard card">
                                            <Link to={brand.route}><p>Rs. {brand.price}</p></Link>
                                        </div>
                                    </div>
                            ))
                            }  
                        </div>
                    </div>
                </div>
  )
}
export default BrandList
                