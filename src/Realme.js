import React from 'react'
import './mobilephoneList.css'
import realmeP1Pro5G from './images/realmeP1Pro5G.png'
import realme125G from './images/realme125G.png'
import realmeC63 from './images/realmeC63.png'
import realmeP2Pro5G from './images/realmeP2Pro5G.png'
import realme70TURBO5G from './images/realme70TURBO5G.png'
import realme13Pro5G from './images/realme13Pro5G.png'
import realmeP1Speed5G from './images/realmeP1Speed5G.png'
import realmeNARZO70X5G from './images/realmeNARZO70X5G.png'
import { Link } from 'react-router-dom'
const Realme = ({handleVisit}) => {
  return (
    <main>
        <section className="MobilePhoneList">
            <div className="MobilePhoneList__mobile mobile1">
              <figure className='mobile__figure figure1'>
                <img src={realmeP1Pro5G} 
                alt="realme P1Pro5G" 
                title="realme P1Pro5G"
                width={'200px'}
                height={'200px'}
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption1'>
                <h1>realme P1 Pro 5G</h1>
                <p>8 GB RAM | 128 GB ROM</p>
                <p>17.02 cm (6.7 inch) Full HD+ Display</p>
                <p>50MP + 8MP | 16MP Front Camera</p>
                <p>5000 mAh Battery</p>
                <p>6 Gen 1 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 19,999</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile2">
            <figure className='mobile__figure figure2'>
                <img src={realme125G} 
                alt="realme 12x5G"
                title="realme 12x5G" 
                width={'200px'}
                height={'200px'}
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption2'>
                <h1>realme 12x 5G</h1>
                <p>8 GB RAM | 128 GB ROM | Expandable Upto 2 TB</p>
                <p>17.07 cm (6.72 inch) Full HD+ Display</p>
                <p>50MP + 2MP | 8MP Front Camera</p>
                <p>5000 mAh Battery
                </p>
                <p>Dimensity 6100+ Processor
                </p>
              </figcaption>
              <h2 className='price'>Rs. 13,499</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile3">
            <figure className='mobile__figure figure3'>
                <img src={realmeC63} 
                alt="realme C63"
                title="realme C63"
                width={'200px'}
                height={'200px'}
                />
              </figure>
              <figcaption className='mobile__figurecaption figurecaption3'>
                <h1>realme C63</h1>
                <p>4 GB RAM | 64 GB ROM | Expandable Upto 2 TB</p>
                <p>17.13 cm (6.745 inch) HD+ Display</p>
                <p>50MP Rear Camera | 8MP Front Camera</p>
                <p>5000 mAh Battery</p>
                <p>T612 Processor</p>
              </figcaption>
              <h2 className='price'>Rs. 8,499</h2>
              <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile4">
              <figure className='mobile__figure figure4'>
                  <img src={realmeP2Pro5G} 
                  alt="realme P2Pro5G"
                  title="realme P2Pro5G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption4'>
                  <h1>realme P2 Pro 5G</h1>
                  <p>8 GB RAM | 128 GB ROM</p>
                  <p>17.02 cm (6.7 inch) Full HD+ Display</p>
                  <p>50MP + 8MP | 32MP Front Camera</p>
                  <p>5200 mAh Battery</p>
                  <p>7s Gen2 Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 21,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile5">
            <figure className='mobile__figure figure5'>
                  <img src={realme70TURBO5G} 
                  alt="realme 70TURBO5G"
                  title="realme 70TURBO5G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption5'>
                  <h1>realme 70 TURBO 5G</h1>
                  <p>6 GB RAM | 128 GB ROM</p>
                  <p>16.94 cm (6.67 inch) Full HD+ Display</p>
                  <p>50MP Rear Camera</p>
                  <p>5000 mAh Battery</p>
                  <p>Segment's Fastest Dimensity 7300 Energy 5G Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 16,278</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile6">
            <figure className='mobile__figure figure6'>
                  <img src={realme13Pro5G} 
                  alt="realme 13Pro5G"
                  title="realme 13Pro5G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption6'>
                  <h1>realme 13 Pro+ 5G</h1>
                  <p>8 GB RAM | 256 GB ROM</p>
                  <p>17.02 cm (6.7 inch) Full HD+ Display
                  </p>
                  <p>50MP + 8MP + 50MP | 32MP Front Camera</p>
                  <p>5200 mAh Battery</p>
                  <p>Snapdragon 7s Gen2 Processor
                  </p>
                </figcaption>
                <h2 className='price'>Rs. 32,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile7">
            <figure className='mobile__figure figure7'>
                  <img src={realmeP1Speed5G} 
                  alt="realme P1Speed5G"
                  title="realme P1Speed5G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption7'>
                  <h1>realme P1 Speed 5G</h1>
                  <p>12 GB RAM | 256 GB ROM | Expandable Upto 2 TB</p>
                  <p>16.94 cm (6.67 inch) Full HD+ Display</p>
                  <p>50MP + 2MP | 16MP Front Camera</p>
                  <p>5000 mAh Battery</p>
                  <p>Dimensity 7300 Energy Processo</p>
                </figcaption>
                <h2 className='price'>Rs. 20,999</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            <div className="MobilePhoneList__mobile mobile8">
            <figure className='mobile__figure figure8'>
                  <img src={realmeNARZO70X5G} 
                  alt="realme NARZO70X5G"
                  title="realme NARZO70X5G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption8'>
                  <h1>realme NARZO 70X 5G</h1>
                  <p>8 GB RAM | 128 GB ROM</p>
                  <p>17.07 cm (6.72 inch) Display</p>
                  <p>50MP Rear Camera</p>
                  <p>5000 mAh Battery</p>
                  <p>Dimensity 6100 Plus, Octa Core Processor</p>
                </figcaption>
                <h2 className='price'>Rs. 13,425</h2>
                <h2 className='visit' onClick={(e)=>{handleVisit(e)}}><Link to="BuyPage" >visit</Link></h2>
            </div>
            {/* <div className="MobilePhoneList__mobile mobile9">
            <figure className='mobile__figure figure9'>
                  <img src={y305G} 
                  alt="Vivo y305G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption9'>
                  <h1>vivo Y30 5G </h1>
                  <p>RAM 6 GB |</p>
                  <p>Display
                  6.51 inches 16.54 cm HD+, IPS LCD</p>
                  <p>Rear Camera, 50 MP + 2 MP ; Front Camera, 8 MP</p>
                  <p>5000mAh battery</p>
                  <p></p>
                </figcaption>
                <h2 className='price'>Rs. 18,790</h2>
                <h2 className='visit'>visit</h2>
            </div>
            <div className="MobilePhoneList__mobile mobile10">
            <figure className='mobile__figure figure10'>
                  <img src={y305G} 
                  alt="Vivo y305G" 
                  width={'200px'}
                  height={'200px'}
                  />
                </figure>
                <figcaption className='mobile__figurecaption figurecaption10'>
                  <h1>vivo Y30 5G </h1>
                  <p>RAM 6 GB |</p>
                  <p>Display
                  6.51 inches 16.54 cm HD+, IPS LCD</p>
                  <p>Rear Camera, 50 MP + 2 MP ; Front Camera, 8 MP</p>
                  <p>5000mAh battery</p>
                  <p></p>
                </figcaption>
                <h2 className='price'>Rs. 18,790</h2>
                <h2 className='visit'>visit</h2>
            </div> */}
        </section>
    </main>
  )
}

export default Realme