import React from 'react'
import './footer.css'
import Accessories from './insideFooterComponent/Accessories';
import FollowUs from './insideFooterComponent/FollowUs';
import ContactUs from './insideFooterComponent/ContactUs';
import Copyright from './insideFooterComponent/Copyright';
import Promises from './insideFooterComponent/Promises';
const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="Footer__content content1">
            <Promises />
        </div>
        <div className="Footer__content content2">
            <Accessories />
        </div>
        <div className="Footer__content content3">
            <FollowUs />
        </div>
        <div className="Footer__content content4">
            <ContactUs />
        </div>
        <div className="Footer__content content5">
            <Copyright />
        </div>
    </footer>
  )
}
export default Footer
