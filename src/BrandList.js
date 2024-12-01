import React from 'react'
import { Link } from 'react-router-dom';
import './BrandList.css';
import vivoV40e from './images/vivoV40e.png'
import SAMSUNGGalaxyA145G from './images/SAMSUNGGalaxyA145G.png'
import realmeC63 from './images/realmeC63.png'
import AppleiPhone15Pro from './images/AppleiPhone15Pro.png'
import OnePlusNordCE4lite5G from './images/OnePlusNordCE4lite5G.png'
import poco from './images/poco.png'
import { Parallax } from 'react-scroll-parallax';
const BrandList = () => {
  return (
    <div className="Collections">
        <Parallax speed={20}>
            <div className="collections__items">
                <div className="items__group">
                    <div className="item__vivo item card">
                        <Link to='/vivopage'>
                        <figure className="vivo__img img">
                            <img src={vivoV40e} 
                                alt='vivoPhone'
                                title='vivoPhone' 
                                width={'100%'} 
                                height={'100%'}
                            />
                        </figure>
                        <figcaption className='vivo__caption caption'>
                            From Rs. 7,998
                        </figcaption>
                        </Link>
                    </div>
                    <div className="item__vivo backCard card">
                        <p>"Capture life in style with Vivo – powerful performance, stunning cameras, and sleek design. Get yours today!"</p>
                    </div>
                </div>
                <div className="items__group">
                    <div className="item__samsung item card ">
                        <Link to='/samsung'>
                        <figure className="samsung__img img">
                            <img src={SAMSUNGGalaxyA145G} 
                                alt='samsungPhone'
                                title='samsungPhone' 
                                width={'100%'} 
                                height={'100%'}
                            />
                        </figure>
                        <figcaption className='samsung__caption caption'>
                            From Rs. 9,999
                        </figcaption>
                        </Link>
                    </div>
                    <div className="item__samsung backCard card">
                        <p>"Unleash the future with Samsung – unbeatable tech, stunning displays, and cutting-edge features. Explore now!"</p>
                    </div>
                </div>
                <div className="items__group">
                    <div className="item__realme item card">
                        <Link to='/realme'>
                        <figure className="realme__img img">
                            <img src={realmeC63} 
                                alt='realmePhone'
                                title='realmePhone' 
                                width={'100%'} 
                                height={'100%'}
                            />
                        </figure>
                        <figcaption className='realme__caption caption'>
                            From Rs. Rs. 8,499
                        </figcaption>
                        </Link>
                    </div>
                    <div className="item__realme backCard card">
                        <p>"Realme – premium performance at unbeatable prices. Power, speed, and style in one phone!"</p>
                    </div>
                </div>
                <div className="items__group">
                    <div className="item__poco item card">
                        <Link to='/poco'>
                        <figure className="poco__img img">
                            <img src={poco} 
                                alt='pocoPhone'
                                title='pocoPhone' 
                                width={'100%'} 
                                height={'100%'}
                            />
                        </figure>
                        <figcaption className='poco__caption caption'>
                            From Rs. 7,999
                        </figcaption>
                        </Link>
                    </div>
                    <div className="item__poco backCard card">
                        <p>"Power, performance, and affordability. Poco is built for gamers and multitaskers. Get yours today!"</p>
                    </div>
                </div>
                <div className="items__group">
                    <div className="item__apple item card">
                        <Link to='/apple'>
                        <figure className="apple__img img">
                            <img src={AppleiPhone15Pro} 
                                alt='applePhone'
                                title='applePhone' 
                                width={'100%'} 
                                height={'100%'}
                            />
                        </figure>
                        <figcaption className='apple__caption caption'>
                            From Rs. 54,900
                        </figcaption>
                        </Link>
                    </div>
                    <div className="item__apple backCard card">
                        <p>"Experience perfection with Apple – seamless design, powerful performance, and stunning cameras. Get yours now!"</p>
                    </div>
                </div>
                <div className="items__group">
                    <div className="item__onePlus item card">
                        <Link to='/onePlus'>
                        <figure className="onePlus__img img">
                            <img src={OnePlusNordCE4lite5G} 
                                alt='onePlusPhone'
                                title='onePlusPhone' 
                                width={'100%'} 
                                height={'100%'}
                            />
                        </figure>
                        <figcaption className='onePlus__caption caption'>
                            From Rs. 19,999
                        </figcaption>
                        </Link>
                    </div>
                    <div className="item__onePlus backCard card">
                        <p>"Speed, power, and fluid performance. OnePlus – built for the fast-paced, high-performance lifestyle!"</p>
                    </div>
                </div>
                
            </div>
        </Parallax>
        
    </div>
  )
}
export default BrandList