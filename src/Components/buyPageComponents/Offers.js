import React from 'react'
import {FaGift } from 'react-icons/fa6'

const Offers = () => {
  return (
    <>
        <h1 className='figcaption__offerHeading'>Available offers</h1>
        <FaGift size={30} className='iconsOfGift'/><p>Bank<span className="off">Offer5%</span>Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
        <FaGift size={30} className='iconsOfGift' /><p>Special PriceGet <span className="off">extra ₹3945 off</span> (price inclusive of cashback/coupon)T&C</p>
        <FaGift size={30} className='iconsOfGift' /><p><span className="off">Extra 10% off</span> on Combo with Mobile - oneplusT&C</p>
        <FaGift size={30} className='iconsOfGift' /><p>EMI starting from ₹530/month</p>
    </>
  )
}

export default Offers