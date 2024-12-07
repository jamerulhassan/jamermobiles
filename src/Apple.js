import React from 'react'
import './mobilephoneList.css'
import DisplayPhones from './displayPhones'
import AppleiPhone15 from './images/AppleiPhone15.png'
import AppleiPhone16Plus from './images/AppleiPhone16Plus.png'
import AppleiPhone16Pro from './images/AppleiPhone16Pro.png'
import AppleiPhone16 from './images/AppleiPhone16.png'
import AppleiPhone15Plus from './images/AppleiPhone15Plus.png'
import AppleiPhone15ProMax from './images/AppleiPhone15ProMax.png'
import AppleiPhone15Pro from './images/AppleiPhone15Pro.png'
import AppleiPhone12 from './images/AppleiPhone12.png'
const Apple = ({handleVisit}) => {
  const applePhoneOne=DisplayPhones(AppleiPhone15,"Apple iPhone 15","6GB RAM | 128 GB ROM","15.49 cm (6.1 inch) Super Retina XDR Display","48MP + 12MP | 12MP Front Camera","3349 mAh Battery","A16 Bionic Chip, 6 Core Processor","57,999",handleVisit)
  const applePhoneTwo=DisplayPhones(AppleiPhone16Plus,"Apple iPhone 16 Plus","8GB RAM | 256 GB ROM","17.02 cm (6.7 inch) Super Retina XDR Display","48MP + 12MP | 12MP Front Camera","4674 mAh Battery","A18 Chip, 6 Core Processor","99,900",handleVisit)
  const applePhoneThree=DisplayPhones(AppleiPhone16Pro,"Apple iPhone 16 Pro","8GB RAM | 128 GB ROM","16.0 cm (6.3 inch) Super Retina XDR Display","48MP + 48MP + 12MP | 12MP Front Camera","3582 mAh Battery","A18 Pro Chip, 6 Core Processor","1,19,900",handleVisit)
  const applePhoneFour=DisplayPhones(AppleiPhone16,"Apple iPhone 16","8GB RAM | 128 GB ROM","15.49 cm (6.1 inch) Super Retina XDR Display","48MP + 12MP | 12MP Front Camera","3561 mAh Battery","A18 Chip, 6 Core Processor","79,900",handleVisit)
  const applePhoneFive=DisplayPhones(AppleiPhone15Plus,"Apple iPhone 15 Plus","6GB RAM | 256 GB ROM","17.02 cm (6.7 inch) Super Retina XDR Display","48MP + 12MP | 12MP Front Camera","4383 mAh Battery","A16 Bionic Chip, 6 Core Processor","79,999",handleVisit)
  const applePhoneSix=DisplayPhones(AppleiPhone15ProMax,"Apple iPhone 15 Pro Max","8GB RAM | 512 GB ROM","17.02 cm (6.7 inch) Super Retina XDR Display","48MP + 12MP + 12MP | 12MP Front Camera","4383 mAh Battery","A17 Pro Chip, 6 Core Processor","1,31,999",handleVisit)
  const applePhoneSeven=DisplayPhones(AppleiPhone15Pro,"Apple iPhone 15 Pro","8GB RAM | 1 TB ROM","15.49 cm (6.1 inch) Super Retina XDR Display","48MP + 12MP + 12MP | 12MP Front Camera","3290 mAh Battery","A17 Pro Chip, 6 Core Processor","1,29,999",handleVisit)
  const applePhoneEigth=DisplayPhones(AppleiPhone12,"Apple iPhone 12","4GB RAM | 128 GB ROM","15.49 cm (6.1 inch) Super Retina XDR Display","12MP + 12MP | 12MP Front Camera","2815 mAh Battery","A14 Bionic Chip with Next Generation Neural Engine Processor","54,900",handleVisit)
  return (
    <main>
      <section>
          <div className="MobilePhoneList__mobile mobile1">
            {applePhoneOne}
          </div>
          <div className="MobilePhoneList__mobile mobile2">
            {applePhoneTwo}
          </div>
          <div className="MobilePhoneList__mobile mobile3">
            {applePhoneThree}
          </div>
          <div className="MobilePhoneList__mobile mobile4">
            {applePhoneFour}
          </div>
          <div className="MobilePhoneList__mobile mobile5">
            {applePhoneFive}
          </div>
          <div className="MobilePhoneList__mobile mobile6">
            {applePhoneSix}
          </div>
          <div className="MobilePhoneList__mobile mobile7">
            {applePhoneSeven}
          </div>
          <div className="MobilePhoneList__mobile mobile8">
            {applePhoneEigth}
          </div>
      </section>
    </main>
  )
}

export default Apple