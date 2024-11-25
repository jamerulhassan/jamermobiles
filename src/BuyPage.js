import React from 'react'
import './buyPage.css'
import { FaCircleInfo,FaGift } from 'react-icons/fa6'
const BuyPage = () => {
  const mobileInformations=JSON.parse(localStorage.getItem("mySessionStorage"))
  console.log(mobileInformations);
  const mobileImage=mobileInformations.mobileImage;
  return (
    <main>
      <div className="BuyPage">
        <div className="BuyPage__imgAndDetails BuyPage__Childrens">
          <figure className="imgAndDetails__figure imgAndDetails">
            <img src={mobileImage}
            alt={mobileInformations.mobileName}
            title={mobileInformations.mobileName}
            width={'100px'}
            height={'100px'}
            />
          </figure>
          <figcaption className="imgAndDetails__figcaption imgAndDetails">
              <h1>{mobileInformations.mobileName}</h1>
              <p>{mobileInformations.mobileRamRom}</p>
              <p>{mobileInformations.mobileResolution}</p>
              <p>{mobileInformations.mobileCamera}</p>
              <p>{mobileInformations.mobileBattery}</p>
              <p>{mobileInformations.mobileOs}</p>
              <h1 className='figcaption__offerHeading'>Available offers</h1>
              <FaGift /><p>Bank<span className="off">Offer5%</span>Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
              <FaGift /><p>Special PriceGet <span className="off">extra ₹3945 off</span> (price inclusive of cashback/coupon)T&C</p>
              <FaGift /><p><span className="off">Extra 10% off</span> on Combo with Mobile - oneplusT&C</p>
              <FaGift /><p>EMI starting from ₹530/month</p>
          </figcaption>  
          <div className="imgAndDetails__notice imgAndDetails">
            <h1 className='notice__h1'>Notice</h1>
            <p className='notice__P'>You are viewing the details for the selected mobile phone. Here, you can explore important information such as specifications, features, pricing, and availability. Find out everything you need to know to make an informed decision about your next mobile phone purchase.</p>
          </div>
          <div className="imgAndDetails__disclimer imgAndDetails">
            <h2 >Phone Purchase Disclaimer</h2>
            <h3>Security:</h3>
            <p className='additionalDetails__security additionalDetails__disclimer'><FaCircleInfo/> Devices must comply with company security policies</p>
            <h3>Liability:</h3>
            <p className='additionalDetails__liability additionalDetails__disclimer'><FaCircleInfo/> You're responsible for any personal charges and reporting lost or damaged phones</p>
            <h3>Compliance:</h3>
            <p className='additionalDetails__compliance additionalDetails__disclimer'><FaCircleInfo/> Follow all company policies and applicable laws when using the device</p>
          </div>
        </div>
      </div>
      <div className="BuyPage__buy BuyPage__Childrens">
          <h2 className='buy__priceOfPhone'>{mobileInformations.mobilePrice}</h2>
          <h3 className='buy__buyButton'>Buy</h3>
      </div>
    </main>
  )
}

export default BuyPage