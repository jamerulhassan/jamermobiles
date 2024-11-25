import React from 'react'
import V40e from './images/V40e.png'
import './mobilephoneList.css'
import SAMSUNGGalaxyA145G from './images/SAMSUNGGalaxyA145G.png'
import SAMSUNGGalaxyF05 from './images/SAMSUNGGalaxyF05.png'
import SAMSUNGGalaxyS23FE from './images/SAMSUNGGalaxyS23FE.png'
import SAMSUNGM05 from './images/SAMSUNGM05.png'
import SAMSUNGGalaxyS245G from './images/SAMSUNGGalaxyS245G.png'
import SAMSUNGGalaxyM355G from './images/SAMSUNGGalaxyM355G.png'
import SAMSUNGGalaxyA545G from './images/SAMSUNGGalaxyA545G.png'
import SAMSUNGGalaxyA155G from './images/SAMSUNGGalaxyA155G.png'
import { Link } from 'react-router-dom'
const Samsung = ({handleVisit}) => {
  return (
    <main>
        <section className="MobilePhoneList">
            <div className="MobilePhoneList__mobile mobile1">
              <figure className='mobile__figure figure1'>
                <img src={SAMSUNGGalaxyA145G} 
                alt="SAMSUNG GalaxyA145G"
                title="SAMSUNG GalaxyA145G" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1 className='nameOfMobile'>SAMSUNG Galaxy A14 5G</h1>
                <p className='mobileRamRom'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                <p className='mobileResolution'>16.76 cm (6.6 inch) Full HD+ Display</p>
                <p className='mobileCamera'>50MP + 2MP + 2MP | 13MP Front Camera</p>
                <p className='mobileBattery'>5000 mAh Lithium Ion Battery</p>
                <p className='mobileOs'>Exynos 1330 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 20,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile2">
            <figure className='mobile__figure figure2'>
                <img src={SAMSUNGGalaxyF05} 
                alt="SAMSUNG GalaxyF05"
                title="SAMSUNG GalaxyF05" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption2'>
                <h1 className='nameOfMobile'>SAMSUNG Galaxy F05</h1>
                <p className='mobileRamRom'>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                <p className='mobileResolution'>17.12 cm (6.74 inch) HD+ Display</p>
                <p className='mobileCamera'>50MP + 2MP | 8MP Front Camera</p>
                <p className='mobileBattery'>5000 mAh Battery</p>
                <p className='mobileOs'>Helio G85 Processor
                </p>
              </figcaption>
              <h2 className='price'>Rs. 9,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile3">
            <figure className='mobile__figure figure3'>
                <img src={SAMSUNGGalaxyS23FE} 
                alt="SAMSUNG Galaxy S23 FE"
                title="SAMSUNG Galaxy S23 FE" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption3'>
                <h1 className='nameOfMobile'>SAMSUNG Galaxy S23 FE</h1>
                <p className='mobileRamRom'>8 GB RAM | 128 GB ROM</p>
                <p className='mobileResolution'>16.26 cm (6.4 inch) Full HD+ Display</p>
                <p className='mobileCamera'>50MP + 12MP | 10MP Front Camera</p>
                <p className='mobileBattery'>4500 mAh Battery</p>
                <p className='mobileOs'>Samsung Exynos 2200 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 55,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile4">
              <figure className='mobile__figure figure4'>
                  <img src={SAMSUNGM05} 
                  alt="SAMSUNG M05"
                  title="SAMSUNG M05" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption4'>
                  <h1 className='nameOfMobile'>SAMSUNG M05</h1>
                  <p className='mobileRamRom'>4 GB RAM | 64 GB ROM</p>
                  <p className='mobileResolution'>17.02 cm (6.7 inch) Display</p>
                  <p className='mobileCamera'>50MP Rear Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Mediatek Helio G85,Android 14</p>
                </figcaption>
                <h2 className='price'>Rs. 9,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile5">
            <figure className='mobile__figure figure5'>
                  <img src={SAMSUNGGalaxyS245G} 
                  alt="SAMSUNG GalaxyS24+5G"
                  title="SAMSUNG GalaxyS24+5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption5'>
                  <h1 className='nameOfMobile'>SAMSUNG Galaxy S24+ 5G</h1>
                  <p className='mobileRamRom'>12 GB RAM | 256 GB ROM</p>
                  <p className='mobileResolution'>17.02 cm (6.7 inch) Quad HD+ Display</p>
                  <p className='mobileCamera'>50MP + 10MP + 12MP | 12MP Front Camera</p>
                  <p className='mobileBattery'>4900 mAh Battery</p>
                  <p className='mobileOs'>Exynos 2400 Processor
                  </p>
                </figcaption>
                <h2 className='price'>Rs. 64,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile6">
            <figure className='mobile__figure figure6'>
                  <img src={SAMSUNGGalaxyM355G} 
                  alt="SAMSUNG GalaxyM35 5G"
                  title="SAMSUNG GalaxyM35 5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption6'>
                  <h1 className='nameOfMobile'>SAMSUNG Galaxy M35 5G</h1>
                  <p className='mobileRamRom'>6 GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>16.76 cm (6.6 inch) Display</p>
                  <p className='mobileCamera'>50MP Rear Camera</p>
                  <p className='mobileBattery'>6000 mAh Battery</p>
                  <p className='mobileOs'>Exynos 1380,Android 14</p>
                </figcaption>
                <h2 className='price'>Rs. 16,383</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile7">
            <figure className='mobile__figure figure7'>
                  <img src={SAMSUNGGalaxyA545G} 
                  alt="SAMSUNG GalaxyA545G"
                  title="SAMSUNG GalaxyA545G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption7'>
                  <h1 className='nameOfMobile'>SAMSUNG Galaxy A54 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 256 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.26 cm (6.4 inch) Full HD+ Display</p>
                  <p className='mobileCamera'>50MP + 12MP + 5MP | 32MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Exynos 1380, Octa Core Processor</p>
                </figcaption>
                <h2 className='price'>Rs.37,499</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile8">
            <figure className='mobile__figure figure8'>
                  <img src={SAMSUNGGalaxyA155G} 
                  alt="SAMSUNG GalaxyA155G"
                  title="SAMSUNG GalaxyA155G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption8'>
                  <h1 className='nameOfMobile'>SAMSUNG Galaxy A15 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.51 cm (6.5 inch) Full HD+ Display</p>
                  <p className='mobileCamera'>50MP + 5MP + 2MP | 13MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Dimensity 6100+ Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 16,990</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
        </section>
    </main>
  )
}

export default Samsung