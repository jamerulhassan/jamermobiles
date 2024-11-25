import React from 'react'
import './footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaCopyright,FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa'
const Footer = () => {
    const today=new Date()
  return (
    <footer className='Footer'>
        <div className="Footer__content content1">
            <h3 className="content__title title1">Our Promise</h3>
            <p className="content__item item1">
                Secure Shopping: All transactions are encrypted.
            </p>
            <p className="content__item item2">
                Fast Delivery: Free shipping on orders over X.
            </p>
            <p className="content__item item3">
                Best Price Guarantee: We'll match any competitor's price.
            </p>
        </div>
        <div className="Footer__content content2">
        <h3 className="content__title title1">Accessories</h3>
            <p className="content__item item1">
                Cases & Covers
            </p>
            <p className="content__item item2">
                Chargers & Cables
            </p>
            <p className="content__item item3">
                Earphones & Headphones
            </p>
        </div>
        <div className="Footer__content content3">
            <h3 className="content__title title1">Follow Us</h3>
            <div className="content__socialmedias">
                <p className="socialmedias__item item1 content__item">
                    <FaFacebook style={{color:'blue'}}/> Facebook
                </p>
                <p className="socialmedias__item item2 content__item">
                    <FaInstagram style={{color:'red'}}/>Instagram
                </p>
                <p className="socialmedias__item item3 content__item">
                <FaXTwitter style={{color:'white'}}/>Twitter
                </p>
            </div>
        </div>
        <div className="Footer__content content4">
            <h3 className="content__title title1">Contact Us</h3>
            <p className="content__item item1">
                Email:contact@jamermobiles.in
            </p>
            <p className="content__item item2">
                Phone:+91 11 2345 6789
            </p>
            <address className='content__item'>
                Address : JamerMobiles,<br />
                Tech Tower, 5th Floor,<br />
                123 Mobile Lane,<br />
                Cyber City, Gurgaon, Haryana 122018,<br />
                India.
            </address>
            <p className="content__item item4">
                Customer Service Hours: Monday-Friday, 9 AM - 6 PM
            </p>

        </div>
        <div className="Footer__content content5">
            <div className="content5__copyright content">
                <h3 className="content__title title1">Copyright</h3>
                <p className="content__item item1">
                &copy; jamerMobiles {today.getFullYear()}. All Rights Reserved. <br />
                Powered by jamer Web Development
                </p>
            </div>
        </div>
    </footer>
  )
}
export default Footer
