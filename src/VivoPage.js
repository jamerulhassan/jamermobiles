import React from 'react'
import './mobilephoneList.css'
import y305G from './images/y305G.png'
import vivoV40e from './images/vivoV40e.png'
import vivoX100pro from './images/vivoX100pro.png'
import vivoY300plus5g from './images/vivoY300plus5g.png'
import vivoY18i from './images/vivoY18i.png'
import vivoT3Lite5G from './images/vivoT3Lite5G.png'
import vivoT3Pro5G from './images/vivoT3Pro5G.png'
import vivoY100A from './images/vivoY100A.png'
import { Link } from 'react-router-dom'
const VivoPage = ({handleVisit}) => {
  return (
    <main>
        <section className="MobilePhoneList">
            <div className="MobilePhoneList__mobile mobile1">
              <figure className='mobile__figure figure1'>
                <img src={y305G} 
                alt="Vivo y305G"
                title="Vivo y305G" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1 className='nameOfMobile'>vivo Y30 5G </h1>
                <p className='mobileRamRom'>6 GB RAM | 128 GB ROM | Expandable Upto 256 GB</p>
                <p className='mobileResolution'>6.51 inches HD+ Display</p>
                <p className='mobileCamera'>50MP + 2MP | 8MP Front Camera</p>
                <p className='mobileBattery'>5000 mAh Battery</p>
                <p className='mobileOs'>MediaTek Dimensity 700 ,Android, Funtouch OS 12</p>
              </figcaption>
              <h2 className='price'>Rs. 18,990</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile2">
            <figure className='mobile__figure figure2'>
                <img src={vivoV40e} 
                alt="VivoV40e"
                title="VivoV40e" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption2'>
                <h1 className='nameOfMobile'>vivo V40e </h1>
                <p className='mobileRamRom'>RAM 8 GB |ROM 256</p>
                <p className='mobileResolution'>Display
                6.77-inch (1080x2392) </p>
                <p className='mobileCamera'>Rear Camera, 50 MP + 8 MP ; Front Camera, 50 MP</p>
                <p className='mobileBattery'>5500mAh battery</p>
                <p className='mobileOs'>Mediatek Dimensity,Android 14, Funtouch 14</p>
              </figcaption>
              <h2 className='price'>Rs. 26,175</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile3">
            <figure className='mobile__figure figure3'>
                <img src={vivoX100pro} 
                alt="Vivo X100pro"
                title="Vivo X100pro" 
                width='200px'
                height='200px'
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption3'>
                <h1 className='nameOfMobile'>vivo X100 Pro </h1>
                <p className='mobileRamRom'>RAM 12GB | 256GB</p>
                <p className='mobileResolution'>Display
                6.78-inch (1260x2800)</p>
                <p className='mobileCamera'>Rear Camera, 50MP + 50MP + 64MP ; Front Camera, 32MP</p>
                <p className='mobileBattery'>5400 mAh battery</p>
                <p className='mobileOs'>OS Android 14</p>
              </figcaption>
              <h2 className='price'>Rs. 34,000</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile4">
              <figure className='mobile__figure figure4'>
                  <img src={vivoY300plus5g} 
                  alt="Vivo vivoY300plus5g"
                  title="Vivo vivoY300plus5g" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption4'>
                  <h1 className='nameOfMobile'>vivo Y300 Plus 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>17.22 cm (6.78 inch) Display</p>
                  <p className='mobileCamera'>50MP + 2MP | 32MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>695 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 23,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile5">
            <figure className='mobile__figure figure5'>
                  <img src={vivoY18i} 
                  alt="Vivo Y18i"
                  title="Vivo Y18i" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption5'>
                  <h1 className='nameOfMobile'>vivo Y18i</h1>
                  <p className='mobileRamRom'>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.66 cm (6.56 Inch) Display</p>
                  <p className='mobileCamera'>13MP + 0.08MP | 5MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>UNISCO T616 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 7,998</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile6">
            <figure className='mobile__figure figure6'>
                  <img src={vivoT3Lite5G} 
                  alt="Vivo T3Lite5G"
                  title="Vivo T3Lite5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption6'>
                  <h1 className='nameOfMobile'>vivo T3 Lite 5G</h1>
                  <p className='mobileRamRom'>6 GB RAM | 128 GB ROM | Expandable Upto 1 TB</p>
                  <p className='mobileResolution'>16.66 cm (6.56 inch) Display</p>
                  <p className='mobileCamera'>50MP + 2MP | 8MP Front Camera</p>
                  <p className='mobileBattery'>5000 mAh Battery</p>
                  <p className='mobileOs'>Dimensity 6300 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 15,499</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile7">
            <figure className='mobile__figure figure7'>
                  <img src={vivoT3Pro5G} 
                  alt="Vivo T3Pro5G"
                  title="Vivo T3Pro5G" 
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption7'>
                  <h1 className='nameOfMobile'>vivo T3 Pro 5G</h1>
                  <p className='mobileRamRom'>8 GB RAM | 128 GB ROM</p>
                  <p className='mobileResolution'>17.2 cm (6.77 inch) Full HD+ AMOLED Display</p>
                  <p className='mobileCamera'>50MP + 8MP | 16MP Front Camera</p>
                  <p className='mobileBattery'>5500 mAh Battery</p>
                  <p className='mobileOs'>Snapdragon 7 Gen 3 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 24,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile8">
            <figure className='mobile__figure figure8'>
                  <img src={vivoY100A} 
                  alt="Vivo Y100A"
                  title="Vivo Y100A"
                  width='200px'
                  height='200px'
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption8'>
                  <h1 className='nameOfMobile'>vivo Y100A </h1>
                  <p className='mobileRamRom'>8 GB RAM | 256 GB ROM</p>
                  <p className='mobileResolution'>16.21 cm (6.38 inch) Full HD+ Display</p>
                  <p className='mobileCamera'>64MP + 2MP + 2MP | 16MP Front Camera</p>
                  <p className='mobileBattery'>4500 mAh battery</p>
                  <p className='mobileOs'>Snapdragon 695 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 23,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage">visit</Link></h2>
            </div>
        </section>
    </main>
  )
}

export default VivoPage