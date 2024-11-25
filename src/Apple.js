import React from 'react'
import './mobilephoneList.css'
import y305G from './images/y305G.png'
import AppleiPhone15 from './images/AppleiPhone15.png'
import AppleiPhone16Plus from './images/AppleiPhone16Plus.png'
import AppleiPhone16Pro from './images/AppleiPhone16Pro.png'
import AppleiPhone16 from './images/AppleiPhone16.png'
import AppleiPhone15Plus from './images/AppleiPhone15Plus.png'
import AppleiPhone15ProMax from './images/AppleiPhone15ProMax.png'
import AppleiPhone15Pro from './images/AppleiPhone15Pro.png'
import AppleiPhone12 from './images/AppleiPhone12.png'
import { Link } from 'react-router-dom'
const Apple = ({handleVisit}) => {
  return (
    <main>
        <section className="MobilePhoneList">
            <div className="MobilePhoneList__mobile mobile1">
              <figure className='mobile__figure figure1'>
                <img src={AppleiPhone15} 
                alt="Apple iPhone15"
                title="Apple iPhone15" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1 className='nameOfMobile'>Apple iPhone 15</h1>
                <p className='mobileRamRom'>6GB RAM | 128 GB ROM</p>
                <p className='mobileResolution'>15.49 cm (6.1 inch) Super Retina XDR Display</p>
                <p className='mobileCamera'>48MP + 12MP | 12MP Front Camera</p>
                <p className='mobileBattery'>3349 mAh Battery</p>
                <p className='mobileOs'>A16 Bionic Chip, 6 Core Processor Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 57,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile2">
            <figure className='mobile__figure figure2'>
                <img src={AppleiPhone16Plus} 
                alt="Apple iPhone16Plus"
                title="Apple iPhone16Plus" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption2'>
                <h1 className='nameOfMobile'>Apple iPhone 16 Plus</h1>
                <p className='mobileRamRom'>8GB RAM | 256 GB ROM</p>
                <p className='mobileResolution'>17.02 cm (6.7 inch) Super Retina XDR Display</p>
                <p className='mobileCamera'>48MP + 12MP | 12MP Front Camera</p>
                <p className='mobileBattery'>4674 mAh Battery</p>
                <p className='mobileOs'>A18 Chip, 6 Core Processor Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 99,900</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile3">
            <figure className='mobile__figure figure3'>
                <img src={AppleiPhone16Pro} 
                alt="Apple iPhone16Pro"
                title="Apple iPhone16Pro"  
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption3'>
                <h1 className='nameOfMobile'>Apple iPhone 16 Pro</h1>
                <p className='mobileRamRom'>8GB RAM | 128 GB ROM</p>
                <p className='mobileResolution'>16.0 cm (6.3 inch) Super Retina XDR Display</p>
                <p className='mobileCamera'>48MP + 48MP + 12MP | 12MP Front Camera</p>
                <p className='mobileBattery'>3582 mAh Battery</p>
                <p className='mobileOs'>A18 Pro Chip, 6 Core Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 1,19,900</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile4">
              <figure className='mobile__figure figure4'>
                  <img src={AppleiPhone16} 
                  alt="Apple iPhone16"
                  title="Apple iPhone16" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption4'>
                  <h1 className='nameOfMobile'>Apple iPhone 16</h1>
                  <p className='mobileRamRom'>8GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>15.49 cm (6.1 inch) Super Retina XDR Display</p>
                  <p className='mobileCamera'>48MP + 12MP | 12MP Front Camera</p>
                  <p className='mobileBattery'>3561 mAh Battery</p>
                  <p className='mobileOs'>A18 Chip, 6 Core Processor Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 79,900</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile5">
            <figure className='mobile__figure figure5'>
                  <img src={AppleiPhone15Plus} 
                  alt="Apple iPhone15Plus"
                  title="Apple iPhone15Plus" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption5'>
                  <h1 className='nameOfMobile'>Apple iPhone 15 Plus</h1>
                  <p className='mobileRamRom'>6GB RAM | 256 GB ROM</p>
                  <p className='mobileResolution'>17.02 cm (6.7 inch) Super Retina XDR Display</p>
                  <p className='mobileCamera'>48MP + 12MP | 12MP Front Camera</p>
                  <p className='mobileBattery'>4383 mAh Battery</p>
                  <p className='mobileOs'>A16 Bionic Chip, 6 Core Processor Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 79,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile6">
            <figure className='mobile__figure figure6'>
                  <img src={AppleiPhone15ProMax} 
                  alt="Apple iPhone15ProMax"
                  title="Apple iPhone15ProMax" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption6'>
                  <h1 className='nameOfMobile'>Apple iPhone 15 Pro Max </h1>
                  <p className='mobileRamRom'>8GB RAM | 512 GB ROM</p>
                  <p className='mobileResolution'>17.02 cm (6.7 inch) Super Retina XDR Display</p>
                  <p className='mobileCamera'>48MP + 12MP + 12MP | 12MP Front Camera</p>
                  <p className='mobileBattery'>4383 mAh Battery</p>
                  <p className='mobileOs'>A17 Pro Chip, 6 Core Processor Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 1,31,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile7">
            <figure className='mobile__figure figure7'>
                  <img src={AppleiPhone15Pro} 
                  alt="Apple iPhone15Pro"
                  title="Apple iPhone15Pro" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption7'>
                  <h1 className='nameOfMobile'>Apple iPhone 15 Pro</h1>
                  <p className='mobileRamRom'>8GB RAM | 1 TB ROM</p>
                  <p className='mobileResolution'>15.49 cm (6.1 inch) Super Retina XDR Display</p>
                  <p className='mobileCamera'>48MP + 12MP + 12MP | 12MP Front Camera</p>
                  <p className='mobileBattery'>3290 mAh Battery</p>
                  <p className='mobileOs'>A17 Pro Chip, 6 Core Processor Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 1,29,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile8">
            <figure className='mobile__figure figure8'>
                  <img src={AppleiPhone12} 
                  alt="Apple iPhone 12"
                  title="Apple iPhone12" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption8'>
                  <h1 className='nameOfMobile'>Apple iPhone 12 </h1>
                  <p className='mobileRamRom'>4GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>15.49 cm (6.1 inch) Super Retina XDR Display</p>
                  <p className='mobileCamera'>12MP + 12MP | 12MP Front Camera</p>
                  <p className='mobileBattery'>2815 mAh Battery</p>
                  <p className='mobileOs'>A14 Bionic Chip with Next Generation Neural Engine Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 54,900</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            
        </section>
    </main>
  )
}

export default Apple