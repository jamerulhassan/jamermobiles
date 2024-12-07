import React from 'react'
import './buyPage.css'
import { FaChevronDown, FaCircleInfo,FaGift } from 'react-icons/fa6'
import { useState,useEffect,useRef } from 'react'
const BuyPage = () => {
  const mobileInformations=JSON.parse(localStorage.getItem("mySessionStorage"))
  const mobileImage=mobileInformations.mobileImage;
  const imgAndDetails__figure = useRef(null);
    const phoneDetails = useRef(null);
    const offers = useRef(null);
    const imgAndDetails__notice = useRef(null);
    const imgAndDetails__disclimer = useRef(null);
    const BuyPage__buy = useRef(null);
    const [isImgAndDetailsFigureVisible, setImgAndDetailsFigureVisible] = useState(false);
    const [isPhoneDetails, setIsPhoneDetails] = useState(false);
    const [isOffersVisible, setIsOffersVisible] = useState(false);
    const [isImgAndDetailsNoticeVisible, setIsImgAndDetailsNoticeVisible] = useState(false);
    const [isImgAndDetailsDisclimerVisible, setIsImgAndDetailsDisclimerVisible] = useState(false);
    const [isBuyPageBuyVisible, setIsBuyPageBuyVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.target === imgAndDetails__figure.current) {
              setImgAndDetailsFigureVisible(entry.isIntersecting);
            }
            if (entry.target === phoneDetails.current) {
              setIsPhoneDetails(entry.isIntersecting);
            }
            if (entry.target === offers.current) {
              setIsOffersVisible(entry.isIntersecting);
            }
            if (entry.target === imgAndDetails__notice.current) {
              setIsImgAndDetailsNoticeVisible(entry.isIntersecting);
            }
            if (entry.target === imgAndDetails__disclimer.current) {
              setIsImgAndDetailsDisclimerVisible(entry.isIntersecting);
            }
            if (entry.target === BuyPage__buy.current) {
              setIsBuyPageBuyVisible(entry.isIntersecting);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      if (imgAndDetails__figure.current) {
        observer.observe(imgAndDetails__figure.current);
      }
      if (phoneDetails.current) {
        observer.observe(phoneDetails.current);
      }
      if (offers.current) {
        observer.observe(offers.current);
      }
      if (imgAndDetails__notice.current) {
        observer.observe(imgAndDetails__notice.current);
      }
      if (imgAndDetails__disclimer.current) {
        observer.observe(imgAndDetails__disclimer.current);
      }
      if (BuyPage__buy.current) {
        observer.observe(BuyPage__buy.current);
      }
      return () => {
        if (imgAndDetails__figure.current) {
          observer.unobserve(imgAndDetails__figure.current);
        }
        if (phoneDetails.current) {
            observer.unobserve(phoneDetails.current);
          }
          if (offers.current) {
            observer.unobserve(offers.current);
          }
          if (imgAndDetails__notice.current) {
            observer.unobserve(imgAndDetails__notice.current);
          }
          if (imgAndDetails__disclimer.current) {
            observer.unobserve(imgAndDetails__disclimer.current);
          }
          if (BuyPage__buy.current) {
            observer.unobserve(BuyPage__buy.current);
          }
      };
    }, []);
  return (
    <main>
      <div className="BuyPage">
        <div className="BuyPage__imgAndDetails BuyPage__Childrens">
          <figure ref={imgAndDetails__figure} className={`imgAndDetails imgAndDetails__figure ${isImgAndDetailsFigureVisible ? 'animate' : ''}`}>
            <img src={mobileImage}
            alt={mobileInformations.mobileName}
            title={mobileInformations.mobileName}
            width='200px'
            height='200px'
            />
            <div className="navigationOfImageDetails">
              <a href="#imgAndDetails__figcaption">
                <p>SCROLL DOWN</p>
                <FaChevronDown />
              </a>
            </div>
          </figure>
          <figcaption id='imgAndDetails__figcaption' className="imgAndDetails__figcaption imgAndDetails">
            <div className='phoneDetails' >
              <div ref={phoneDetails} className={`allPhoneDetails ${isPhoneDetails ? 'animate' : ''}`}>
                <h1>{mobileInformations.mobileName}</h1>
                <p>{mobileInformations.mobileRamRom}</p>
                <p>{mobileInformations.mobileResolution}</p>
                <p>{mobileInformations.mobileCamera}</p>
                <p>{mobileInformations.mobileBattery}</p>
                <p>{mobileInformations.mobileOs}</p>
              </div>
            </div>
            <div ref={offers} className={`offers ${isOffersVisible ? 'animate' : ''}`}>
              <h1 className='figcaption__offerHeading'>Available offers</h1>
              <FaGift size={30} className='iconsOfGift'/><p>Bank<span className="off">Offer5%</span>Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
              <FaGift size={30} className='iconsOfGift' /><p>Special PriceGet <span className="off">extra ₹3945 off</span> (price inclusive of cashback/coupon)T&C</p>
              <FaGift size={30} className='iconsOfGift' /><p><span className="off">Extra 10% off</span> on Combo with Mobile - oneplusT&C</p>
              <FaGift size={30} className='iconsOfGift' /><p>EMI starting from ₹530/month</p>
            </div>
          </figcaption>  
          <div ref={imgAndDetails__notice} className={`imgAndDetails imgAndDetails__notice ${isImgAndDetailsNoticeVisible ? 'animate' : ''}`}>
            <h1 className='notice__h1'>Notice</h1>
            <p className='notice__P'>You are viewing the details for the selected mobile phone. Here, you can explore important information such as specifications, features, pricing, and availability. Find out everything you need to know to make an informed decision about your next mobile phone purchase.</p>
          </div>
          <div ref={imgAndDetails__disclimer} className={`imgAndDetails imgAndDetails__disclimer ${isImgAndDetailsDisclimerVisible ? 'animate' : ''}`}>
            <h1 >Disclaimer</h1>
            <h3>Security:</h3>
            <p className='additionalDetails__security additionalDetails__disclimer'><FaCircleInfo/> Devices must comply with company security policies</p>
            <h3>Liability:</h3>
            <p className='additionalDetails__liability additionalDetails__disclimer'><FaCircleInfo/> You're responsible for any personal charges and reporting lost or damaged phones</p>
            <h3>Compliance:</h3>
            <p className='additionalDetails__compliance additionalDetails__disclimer'><FaCircleInfo/> Follow all company policies and applicable laws when using the device</p>
          </div>
        </div>
      <div ref={BuyPage__buy} className={`BuyPage__buy BuyPage__Childrens ${isBuyPageBuyVisible ? 'animate' : ''}`}>
        <h2 className='buy__priceOfPhone'>{mobileInformations.mobilePrice}</h2>
        <h3 className='buy__buyButton'>Buy</h3>
      </div>
      </div>
    </main>
  )
}

export default BuyPage