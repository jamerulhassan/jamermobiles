import React from 'react'
import { Link } from 'react-router-dom';
import './BrandList.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useRef,useState,useEffect } from 'react';

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
                