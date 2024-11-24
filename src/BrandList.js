import React from 'react'
import { Link } from 'react-router-dom';
import './BrandList.css';
import vivo from './images/vivo.png'
import samsung from './images/samsung.png'
import realme from './images/realme.png'
import poco from './images/poco.png'
import apple from './images/apple.png'
import onePlus from './images/onePlus.png'
import vivoLogo from './images/vivoLogo.png'
import samsungLogo from './images/samsungLogo.png'
import realmeLogo from './images/realmeLogo.png'
import pocoLogo from './images/pocoLogo.png'
import appleLogo from './images/appleLogo.png'
import onePlusLogo from './images/onePlusLogo.png'
const BrandList = () => {
  return (
    <div className="Collections__table collectionContent">
    <table className='table__products'>
        <thead className="products__header">
            <tr className='header__firstRow'>
                <th className="header__firstRow__heading">
                    <h2>Collections</h2>
                </th>
                <td className="header__firstRow__data">
                    <h2>Starting Prices</h2>
                </td>
            </tr>
        </thead>
        <tbody className="products__body">
            
                <tr className='bodyRows body__firstRow'>
                <th className='bodyheadings body__firstRow__heading'>
                    <div className="heading__img">
                    <figure className='bodyheadings__logo logo'>
                        <img src={vivoLogo} 
                        alt="vivoLogo"
                        title="vivoLogo"
                        width={'50px'}
                        height={"50px"}
                        />
                    </figure>
                    <h3 className='img__brandName'><Link to="/vivopage">VIVO</Link></h3>
                    </div>
                </th>
                <td className='bodyDatas body__firstRow__data'>
                    
                        <figure className="data__img">
                        <img src={vivo} 
                        alt='vivoPhone'
                        title='vivoPhone' 
                        width={'100%'} 
                        height={'100%'}/>
                        </figure>
                    <h3 className='rate'><Link to="/vivopage">7,998</Link></h3>
                
                </td>
                </tr>
            
            
                <tr className='bodyRows body__secondRow'>
                <th className='bodyheadings body__secondtRow__heading'>
                <div className="heading__img">
                    <figure className='bodyheadings__logo logo'>
                        <img src={samsungLogo} 
                        alt="samsungLogo"
                        title="samsungLogo"
                        width={"50px"}
                        height={"50px"}
                        />
                    </figure>
                    <h3 className='img__brandName'><Link to="/samsung">SAMSUNG</Link></h3>
                    </div>
                </th>
                <td className='bodyDatas body__secondRow__data'>
                
                <figure className="data__img">
                        <img src={samsung} 
                        alt='samsungPhone'
                        title='samsungPhone' 
                        width={'200px'} 
                        height={'200px'}/>
                        </figure>
                    <h3 className='rate'><Link to="/samsung">9,999</Link></h3>
                
                </td>
                </tr>
            
            
                <tr className='bodyRows body__thirdRow'>
                <th className='bodyheadings body__thirdRow__heading'>
                <div className="heading__img">
                    <figure className='bodyheadings__logo logo'>
                        <img src={realmeLogo} 
                        alt="realmeLogo"
                        title="realmeLogo"
                        width={"50px"}
                        height={"50px"}
                        />
                    </figure>
                    <h3 className='img__brandName'><Link to="/realme">REALME</Link></h3>
                    </div>
                </th>
                <td className='bodyDatas body__thirdRow__data'>
                
                <figure className="data__img">
                        <img src={realme}
                        alt='realmePhone'
                        title='realmePhone' 
                        width={'200px'} 
                        height={'150px'}/>
                        </figure>
                    <h3 className='rate'><Link to="/realme">8,499</Link></h3>
            
                </td>  
                </tr>
            
            
                <tr className='bodyRows body__fourthRow'>
                <th className='bodyheadings body__fourthRow__heading'>
                <div className="heading__img">
                    <figure className='bodyheadings__logo logo'>
                        <img src={pocoLogo} 
                        alt="pocoLogo"
                        title="pocoLogo"
                        width={"50px"}
                        height={"50px"}
                        />
                    </figure>
                    <h3 className='img__brandName'><Link to="/poco">POCO</Link></h3>
                    </div>
                </th>
                <td className='bodyDatas body__fourthRow__data'>
                
                <div className="data__img">
                        <img src={poco} 
                        alt='pocoPhone'
                        title='pocoPhone' 
                        width={'200px'} 
                        height={'200px'}/>
                        </div>
                    <h3 className='rate'><Link to="/poco">7,999</Link></h3>
                
                </td> 
                </tr>
            
            
                <tr className='bodyRows body__fifthRow'>
                <th className='bodyheadings body__fifthRow__heading'>
                <div className="heading__img">
                    <figure className='bodyheadings__logo logo'>
                        <img src={appleLogo} 
                        alt="appleLogo"
                        title="appleLogo"
                        width={"50px"}
                        height={"50px"}
                        />
                    </figure>
                    <h3 className='img__brandName'><Link to="/apple">APPLE </Link></h3>
                    </div>
                </th>
                <td className='bodyDatas body__fifthRow__data'>
                
                <div className="data__img">
                        <img src={apple} 
                        alt='applePhone'
                        title='applePhone' 
                        width={'200px'} 
                        height={'200px'}/>
                        </div>
                    <h3 className='rate'><Link to="/apple">54,900</Link></h3>
        
                </td> 
                </tr>
           
           
                <tr className='bodyRows body__sixthRow'>
                <th className='bodyheadings body__sixthRow__heading'>
                <div className="heading__img">
                    <figure className='bodyheadings__logo logo'>
                        <img src={onePlusLogo} 
                        alt="onePlusLogo"
                        title="onePlusLogo"
                        width={"50px"}
                        height={"50px"}
                        />
                    </figure>
                    <h3 className='img__brandName'> <Link to="/onePlus">1+plus</Link></h3>
                    </div>
                </th>
                <td className='bodyDatas body__sixthRow__data'>
                
                <div className="data__img">
                        <img src={onePlus} 
                        alt='onePlusPhone'
                        title='onePlusPhone' 
                        width={'200px'} 
                        height={'200px'}/>
                        </div>
                    <h3 className='rate'> <Link to="/onePlus">19,999</Link></h3>
        
                </td> 
                </tr>
            
        </tbody>
    </table>
</div>
  )
}

export default BrandList