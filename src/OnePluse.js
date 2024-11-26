import React from 'react'
import './mobilephoneList.css'
import OnePlusNordCE3Lite5G from './images/OnePlusNordCE3Lite5G.png'
import OnePlusNordCE4lite5G from './images/OnePlusNordCE4lite5G.png'
import OnePlusNordCE4 from './images/OnePlusNordCE4.png'
import OnePlus12R from './images/OnePlus12R.png'
import OnePlusNord35G from './images/OnePlusNord35G.png'
import OnePlusNordCE2Lite5G from './images/OnePlusNordCE2Lite5G.png'
import OnePlus11R5G from './images/OnePlus11R5G.png'
import OnePlus12 from './images/OnePlus12.png'
import { Link } from 'react-router-dom'
const OnePlus = ({handleVisit}) => {
  return (
    <main>
        <section className="MobilePhoneList">
            <div className="MobilePhoneList__mobile mobile1">
              <figure className='mobile__figure figure1'>
                <img src={OnePlusNordCE3Lite5G} 
                alt="OnePlus NordCE3Lite5G"
                title="OnePlus NordCE3Lite5G" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1 className='nameOfMobile'>OnePlus Nord CE 3 Lite 5G</h1>
                <p className='mobileRamRom'>8 GB RAM | 128 GB ROM</p>
                <p className='mobileResolution'>17.07 cm (6.72 inch) Display</p>
                <p className='mobileCamera'>108MP Rear Camera</p>
                <p className='mobileBattery'>5000 mAh Battery</p>
                <p className='mobileOs'>Android Android 13 Snapdragon</p>
              </figcaption>
              <h2 className='price'>Rs. 19,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile2">
            <figure className='mobile__figure figure2'>
                <img src={OnePlusNordCE4lite5G} 
                alt="OnePlus NordCE4lite5G"
                title="OnePlus NordCE4lite5G" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption2'>
                <h1 className='nameOfMobile'>OnePlus Nord CE4 lite 5G </h1>
                <p className='mobileRamRom'>8 GB RAM | 128 GB ROM</p>
                <p className='mobileResolution'>16.94 cm (6.67 inch) Display</p>
                <p className='mobileCamera'>50MP Rear Camera</p>
                <p className='mobileBattery'>5500 mAh Battery</p>
                <p className='mobileOs'>Android 14, OxygenOS 14</p>
              </figcaption>
              <h2 className='price'>Rs. 20,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile3">
            <figure className='mobile__figure figure3'>
                <img src={OnePlusNordCE4} 
                alt="OnePlus NordCE4"
                title="OnePlus NordCE4" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption3'>
                <h1 className='nameOfMobile'>OnePlus Nord CE4</h1>
                <p className='mobileRamRom'>8 GB RAM | 256 GB ROM</p>
                <p className='mobileResolution'>17.02 cm (6.7 inch) Display</p>
                <p className='mobileCamera'>50MP Rear Camera</p>
                <p className='mobileBattery'>5500 mAh Battery</p>
                <p className='mobileOs'>OxygenOS 14.0 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 26,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile4">
              <figure className='mobile__figure figure4'>
                  <img src={OnePlus12R} 
                  alt="OnePlus 12R" 
                  title="OnePlus 12R"
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption4'>
                  <h1 className='nameOfMobile'>OnePlus 12R</h1>
                  <p className='mobileRamRom'>16 GB RAM | 256 GB ROM</p>
                  <p className='mobileResolution'>17.22 cm (6.78 inch) Display</p>
                  <p className='mobileCamera'>50MP Rear Camera</p>
                  <p className='mobileBattery'>5500 mAh Battery</p>
                  <p className='mobileOs'>Android Android 14 Snapdragon</p>
                </figcaption>
                <h2 className='price'>Rs. 45,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile5">
            <figure className='mobile__figure figure5'>
                  <img src={OnePlusNord35G} 
                  alt="OnePlus Nord35G"
                  title="OnePlus Nord35G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption5'>
                  <h1 className='nameOfMobile'>OnePlus Nord 3 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>17.12 cm (6.74 inch) Full HD+ Display</p>
                  <p className='mobileCamera'>50MP Rear Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Android Android 13 OxygenOS Mediatek</p>
                </figcaption>
                <h2 className='price'>Rs. 33,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile6">
            <figure className='mobile__figure figure6'>
                  <img src={OnePlusNordCE2Lite5G} 
                  alt="OnePlus NordCE2Lite5G"
                  title="OnePlus NordCE2Lite5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption6'>
                  <h1 className='nameOfMobile'>OnePlus Nord CE 2 Lite 5G</h1>
                  <p className='mobileRamRom'>6 GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>16.74 cm (6.59 inch) Display</p>
                  <p className='mobileCamera'>64MP Rear Camera | 16MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Android 10 NA</p>
                </figcaption>
                <h2 className='price'>Rs. 19,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile7">
            <figure className='mobile__figure figure7'>
                  <img src={OnePlus11R5G} 
                  alt="OnePlus 11R5G"
                  title="OnePlus 11R5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption7'>
                  <h1 className='nameOfMobile'>OnePlus 11R 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>17.02 cm (6.7 inch) Display</p>
                  <p className='mobileCamera'>50MP Rear Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Android OxygenOS based on Android 13 Snapdragon </p>
                </figcaption>
                <h2 className='price'>Rs. 39,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile8">
            <figure className='mobile__figure figure8'>
                  <img src={OnePlus12} 
                  alt="OnePlus 12"
                  title="OnePlus 12" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption8'>
                  <h1 className='nameOfMobile'>OnePlus 12</h1>
                  <p className='mobileRamRom'>12 GB RAM | 256 GB ROM</p>
                  <p className='mobileResolution'>17.32 cm (6.82 inch) Display</p>
                  <p className='mobileCamera'>64MP Rear Camera</p>
                  <p className='mobileBattery'>5400 mAh Battery</p>
                  <p className='mobileOs'>Android Android 14 Snapdragon</p>
                </figcaption>
                <h2 className='price'>Rs. 64,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
        </section>
    </main>
  )
}

export default OnePlus