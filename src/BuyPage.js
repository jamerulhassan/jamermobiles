import React from 'react'
import './buyPage.css'
import { FaChevronDown} from 'react-icons/fa6'
import { useState,useEffect,useRef } from 'react'
import Disclimer from './Disclimer'
import Notice from './Notice'
import Offers from './Offers'
import { useParams } from 'react-router-dom'
const BuyPage = ({individualData,isLoading,fetchError}) => {
  
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
      
    }, []);
    const getFieldValue = (fieldName) => {
      return individualData?.[fieldName]?.stringValue || 'N/A';
    };
  return (
    <main>
      {isLoading && <p className='loading'>Your item is loading...</p>}
          {fetchError && <p>{`error:${fetchError}`}</p>}
          {!isLoading && !fetchError &&
      <div className="BuyPage">
        <div className="BuyPage__imgAndDetails BuyPage__Childrens">
          <figure ref={imgAndDetails__figure} className={`imgAndDetails imgAndDetails__figure ${isImgAndDetailsFigureVisible ? 'animate' : ''}`}>
            <img src={getFieldValue('mobileImage')}
          alt={getFieldValue('mobileName')}
          title={getFieldValue('mobileName')}
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
                <h1>{getFieldValue('mobileName')}</h1>
                <p>{getFieldValue('mobileRamRom')}</p>
                <p>{getFieldValue('mobileResolution')}</p>
                <p>{getFieldValue('mobileCamera')}</p>
                <p>{getFieldValue('mobileBattery')}</p>
                <p>{getFieldValue('mobileOs')}</p>
              </div>
            </div>
            <div ref={offers} className={`offers ${isOffersVisible ? 'animate' : ''}`}>
              <Offers />
            </div>
          </figcaption>  
          <div ref={imgAndDetails__notice} className={`imgAndDetails imgAndDetails__notice ${isImgAndDetailsNoticeVisible ? 'animate' : ''}`}>
            <Notice />
          </div>
          <div ref={imgAndDetails__disclimer} className={`imgAndDetails imgAndDetails__disclimer ${isImgAndDetailsDisclimerVisible ? 'animate' : ''}`}>
            <Disclimer />
          </div>
        </div>
      <div ref={BuyPage__buy} className={`BuyPage__buy BuyPage__Childrens ${isBuyPageBuyVisible ? 'animate' : ''}`}>
        <h2 className='buy__priceOfPhone'>{getFieldValue('mobilePrice')}</h2>
        <h3 className='buy__buyButton'>Buy</h3>
      </div>
    </div>
}
  </main>
  )
}

export default BuyPage