import React from 'react'
import './demoPic.css'
import i_phone from './images/i_phone.png'
import android from './images/android.png'
const DemoPic = () => {
  return (
    <section className='DemoPic'>
        <div className='DemoPic__ImageDiv'>
          <div className="imageDivs imageDiv__first">
          <figure className="ImageDiv__img1  img">
            <img src={i_phone} alt="iphone" title='iphone'
            />
          </figure>
          <p className='reason ImageDiv__reason1'>
              Exclusive Discounts:Get the best deals on smartphones, including trade-in offers.</p>
          </div>
          <div className="imageDivs imageDiv__second">
          <p className="reason ImageDiv__reason2">
              Fast Delivery: We offer reliable and speedy shipping to get your phone to you in no time.
          </p>
          <figure className="ImageDiv__img2 img">
            <img src={android} alt="android" title='android'/>
          </figure>
          </div>
        </div>
        <div className="borderOfDemoPic"></div>
    </section>
  )
}

export default DemoPic