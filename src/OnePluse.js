import React from 'react'
import './mobilephoneList.css'
import DisplayPhones from './displayPhones'
import OnePlusNordCE3Lite5G from './images/OnePlusNordCE3Lite5G.png'
import OnePlusNordCE4lite5G from './images/OnePlusNordCE4lite5G.png'
import OnePlusNordCE4 from './images/OnePlusNordCE4.png'
import OnePlus12R from './images/OnePlus12R.png'
import OnePlusNord35G from './images/OnePlusNord35G.png'
import OnePlusNordCE2Lite5G from './images/OnePlusNordCE2Lite5G.png'
import OnePlus11R5G from './images/OnePlus11R5G.png'
import OnePlus12 from './images/OnePlus12.png'
const OnePlus = ({handleVisit}) => {
  const onePlusPhoneOne=DisplayPhones(OnePlusNordCE3Lite5G,"OnePlus Nord CE 3 Lite 5G","8 GB RAM | 128 GB ROM","17.07 cm (6.72 inch) Display","108MP Rear Camera","5000 mAh Battery","Android Android 13 Snapdragon","19,999",handleVisit)
  const onePlusPhoneTwo=DisplayPhones(OnePlusNordCE4lite5G,"OnePlus Nord CE4 lite 5G","8 GB RAM | 128 GB ROM","16.94 cm (6.67 inch) Display","50MP Rear Camera","5500 mAh Battery","Android 14, OxygenOS 14","20,999",handleVisit)
  const onePlusPhoneThree=DisplayPhones(OnePlusNordCE4,"OnePlus Nord CE4","8 GB RAM | 256 GB ROM","17.02 cm (6.7 inch) Display","50MP Rear Camera","5500 mAh Battery","OxygenOS 14.0 Processor","26,999",handleVisit)
  const onePlusPhoneFour=DisplayPhones(OnePlus12R,"OnePlus 12R","16 GB RAM | 256 GB ROM","17.22 cm (6.78 inch) Display","50MP Rear Camera","5500 mAh Battery","Android Android 14 Snapdragon","45,999",handleVisit)
  const onePlusPhoneFive=DisplayPhones(OnePlusNord35G,"OnePlus Nord 3 5G","8 GB RAM | 128 GB ROM","17.12 cm (6.74 inch) Full HD+ Display","50MP Rear Camera","5000 mAh Battery","Android Android 13 OxygenOS Mediatek","33,999",handleVisit)
  const onePlusPhoneSix=DisplayPhones(OnePlusNordCE2Lite5G,"OnePlus Nord CE 2 Lite 5G","6 GB RAM | 128 GB ROM","16.74 cm (6.59 inch) Display","64MP Rear Camera | 16MP Front Camera","5000 mAh Battery","Android 10 NA","19,999",handleVisit)
  const onePlusPhoneSeven=DisplayPhones(OnePlus11R5G,"OnePlus 11R 5G","8 GB RAM | 128 GB ROM","17.02 cm (6.7 inch) Display","50MP Rear Camera","5000 mAh Battery","Android OxygenOS based on Android 13 Snapdragon","39,999",handleVisit)
  const onePlusPhoneEigth=DisplayPhones(OnePlus12,"OnePlus 12","12 GB RAM | 256 GB ROM","17.32 cm (6.82 inch) Display","64MP Rear Camera","5400 mAh Battery","Android Android 14 Snapdragon","64,999",handleVisit)
  const oneplusPhones=[
    {id:1,phone:onePlusPhoneOne},
    {id:2,phone:onePlusPhoneTwo},
    {id:3,phone:onePlusPhoneThree},
    {id:4,phone:onePlusPhoneFour},
    {id:5,phone:onePlusPhoneFive},
    {id:6,phone:onePlusPhoneSix},
    {id:7,phone:onePlusPhoneSeven},
    {id:8,phone:onePlusPhoneEigth}]
  return (
    <main>
      <section>
        {
          oneplusPhones.map(phone=>(
            <div className="MobilePhoneList__mobile" >
            {phone.phone}
          </div>
          ))
        }
      </section>
    </main>
  ) 
}

export default OnePlus




/* <div className="MobilePhoneList__mobile mobile1">
            {onePlusPhoneOne}
          </div>
          <div className="MobilePhoneList__mobile mobile2">
            {onePlusPhoneTwo}
          </div>
          <div className="MobilePhoneList__mobile mobile3">
            {onePlusPhoneThree}
          </div>
          <div className="MobilePhoneList__mobile mobile4">
            {onePlusPhoneFour}
          </div>
          <div className="MobilePhoneList__mobile mobile5">
            {onePlusPhoneFive}
          </div>
          <div className="MobilePhoneList__mobile mobile6">
            {onePlusPhoneSix}
          </div>
          <div className="MobilePhoneList__mobile mobile7">
            {onePlusPhoneSeven}
          </div>
          <div className="MobilePhoneList__mobile mobile8">
            {onePlusPhoneEigth}
          </div> */