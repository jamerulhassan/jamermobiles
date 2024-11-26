import React from 'react'
import './mobilephoneList.css'
import POCOM65G from './images/POCOM65G.png'
import POCOC65 from './images/POCOC65.png'
import POCOC61 from './images/POCOC61.png'
import POCOX6Neo5G from './images/POCOX6Neo5G.png'
import POCOF65G from './images/POCOF65G.png'
import POCOC55 from './images/POCOC55.png'
import POCOX3Pro from './images/POCOX3Pro.png'
import POCOC51 from './images/POCOC51.png'
import { Link } from 'react-router-dom'
const Poco = ({handleVisit}) => {
  return (
    <main>
        <section className="MobilePhoneList">
            <div className="MobilePhoneList__mobile mobile1">
              <figure className='mobile__figure figure1'>
                <img src={POCOM65G} 
                alt="POCO M65G"
                title="POCO M65G" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1 className='nameOfMobile'>POCO M6 5G</h1>
                <p className='mobileRamRom'>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                <p className='mobileResolution'>17.12 cm (6.74 inch) HD+ Display</p>
                <p className='mobileCamera'>50MP Rear Camera | 5MP Front Camera</p>
                <p className='mobileBattery'>5000 mAh Battery</p>
                <p className='mobileOs'>Mediatek Dimensity 6100+ Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 7,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile2">
            <figure className='mobile__figure figure2'>
                <img src={POCOC65} 
                alt="POCO C65"
                title="POCO C65" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption2'>
                <h1 className='nameOfMobile'>POCO C65</h1>
                <p className='mobileRamRom'>4 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                <p className='mobileResolution'>17.12 cm (6.74 inch) HD+ Display</p>
                <p className='mobileCamera'>50MP + AI Lens + 2MP | 8MP Front Camera</p>
                <p className='mobileBattery'>5000 mAh Battery</p>
                <p className='mobileOs'>Helio G85 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 26,175</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile3">
            <figure className='mobile__figure figure3'>
                <img src={POCOC61} 
                alt="POCO C61"
                title="POCO C61" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption3'>
                <h1 className='nameOfMobile'>POCO C61</h1>
                <p className='mobileRamRom'>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                <p className='mobileResolution'>17.04 cm (6.71 inch) HD+ Display</p>
                <p className='mobileCamera'>8MP Rear Camera | 5MP Front Camera</p>
                <p className='mobileBattery'>5000 mAh Battery</p>
                <p className='mobileOs'>Helio G36 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 8,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile4">
              <figure className='mobile__figure figure4'>
                  <img src={POCOX6Neo5G} 
                  alt="POCO X6Neo5G"
                  title="POCO X6Neo5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption4'>
                  <h1 className='nameOfMobile'>POCO X6 Neo 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.94 cm (6.67 inch) Full HD+ Display</p>
                  <p className='mobileCamera'>108MP + 2MP | 16MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Dimensity 6080 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 12,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile5">
            <figure className='mobile__figure figure5'>
                  <img src={POCOF65G} 
                  alt="POCO F65G"
                  title="POCO F65G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption5'>
                  <h1 className='nameOfMobile'>POCO F6 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 256 GB ROM</p>
                  <p className='mobileResolution'>16.94 cm (6.67 inch) Display</p>
                  <p className='mobileCamera'>50MP (OIS) + 8MP | 20MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>8s Gen3 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 24,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile6">
            <figure className='mobile__figure figure6'>
                  <img src={POCOC55} 
                  alt="POCO C55"
                  title="POCO C55" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption6'>
                  <h1 className='nameOfMobile'>POCO C55 </h1>
                  <p className='mobileRamRom'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>17.04 cm (6.71 inch) HD+ Display</p>
                  <p className='mobileCamera'>50MP Dual Rear Camera | 5MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Batter</p>
                  <p className='mobileOs'>Mediatek Helio G85 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 10,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile7">
            <figure className='mobile__figure figure7'>
                  <img src={POCOX3Pro} 
                  alt="POCO X3Pro"
                  title="POCO X3Pro" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption7'>
                  <h1 className='nameOfMobile'>POCO X3 Pro</h1>
                  <p className='mobileRamRom'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.94 cm (6.67 inch) Full HD+ Display</p>
                  <p className='mobileCamera'>48MP + 8MP + 2MP + 2MP | 20MP Front Camera</p>
                  <p className='mobileBattery'>5160 mAh Lithium-ion Polymer Battery</p>
                  <p className='mobileOs'>Qualcomm Snapdragon 860 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 11,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile8">
            <figure className='mobile__figure figure8'>
                  <img src={POCOC51} 
                  alt="POCO C51"
                  title="POCO C51" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption8'>
                  <h1 className='nameOfMobile'>POCO C51</h1>
                  <p className='mobileRamRom'>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.56 cm (6.52 inch) HD+ Display</p>
                  <p className='mobileCamera'>8MP Dual Rear Camera | 5MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Helio G36 Processor</p>
                </figcaption>
                <h2 className='price'>Rs.9,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
        </section>
    </main>
  )
}

export default Poco