import React from 'react'
import './mobilephoneList.css'
import displayPhones from './displayPhones'
import POCOM65G from './images/POCOM65G.png'
import POCOC65 from './images/POCOC65.png'
import POCOC61 from './images/POCOC61.png'
import POCOX6Neo5G from './images/POCOX6Neo5G.png'
import POCOF65G from './images/POCOF65G.png'
import POCOC55 from './images/POCOC55.png'
import POCOX3Pro from './images/POCOX3Pro.png'
import POCOC51 from './images/POCOC51.png'
const Poco = ({handleVisit}) => {
  const pocoPhoneOne=displayPhones(POCOM65G,"POCO M6 5G","4 GB RAM | 64 GB ROM | Expandable Upto 1 TB","17.12 cm (6.74 inch) HD+ Display","50MP Rear Camera | 5MP Front Camera","5000 mAh Battery","Mediatek Dimensity 6100+ Processor","7,999",handleVisit)
  const pocoPhoneTwo=displayPhones(POCOC65,"POCO C65","4 GB RAM | 128 GB ROM | Expandable Upto 1 TB","17.12 cm (6.74 inch) HD+ Display","50MP + AI Lens + 2MP | 8MP Front Camera","5000 mAh Battery","Helio G85 Processor","26,175",handleVisit)
  const pocoPhoneThree=displayPhones(POCOC61,"POCO C61","4 GB RAM | 64 GB ROM | Expandable Upto 1 TB","17.04 cm (6.71 inch) HD+ Display","8MP Rear Camera | 5MP Front Camera","5000 mAh Battery","Helio G36 Processor","8,999",handleVisit)
  const pocoPhoneFour=displayPhones(POCOX6Neo5G,"POCO X6 Neo 5G","8 GB RAM | 128 GB ROM | Expandable Upto 1 TB","16.94 cm (6.67 inch) Full HD+ Display","108MP + 2MP | 16MP Front Camera","5000 mAh Battery","Dimensity 6080 Processor","12,999",handleVisit)
  const pocoPhoneFive=displayPhones(POCOF65G,"POCO F6 5G","8 GB RAM | 256 GB ROM","16.94 cm (6.67 inch) Display","50MP (OIS) + 8MP | 20MP Front Camera","5000 mAh Battery","8s Gen3 Processor","24,999",handleVisit)
  const pocoPhoneSix=displayPhones(POCOC55,"POCO C55","6 GB RAM | 128 GB ROM | Expandable Upto 1 TB","17.04 cm (6.71 inch) HD+ Display","50MP Dual Rear Camera | 5MP Front Camera","5000 mAh Battery","Mediatek Helio G85 Processor","10,999",handleVisit)
  const pocoPhoneSeven=displayPhones(POCOX3Pro,"POCO X3 Pro","6 GB RAM | 128 GB ROM | Expandable Upto 1 TB","16.94 cm (6.67 inch) Full HD+ Display","48MP + 8MP + 2MP + 2MP | 20MP Front Camera","5160 mAh Lithium-ion Polymer Battery","Qualcomm Snapdragon 860 Processor","11,999",handleVisit)
  const pocoPhoneEigth=displayPhones(POCOC51,"POCO C51","4 GB RAM | 64 GB ROM | Expandable Upto 1 TB","16.56 cm (6.52 inch) HD+ Display","8MP Dual Rear Camera | 5MP Front Camera","5000 mAh Battery","Helio G36 Processor","9,999",handleVisit)
  return (
    <main>
      <section>
          <div className="MobilePhoneList__mobile mobile1">
            {pocoPhoneOne}
          </div>
          <div className="MobilePhoneList__mobile mobile2">
            {pocoPhoneTwo}
          </div>
          <div className="MobilePhoneList__mobile mobile3">
            {pocoPhoneThree}
          </div>
          <div className="MobilePhoneList__mobile mobile4">
            {pocoPhoneFour}
          </div>
          <div className="MobilePhoneList__mobile mobile5">
            {pocoPhoneFive}
          </div>
          <div className="MobilePhoneList__mobile mobile6">
            {pocoPhoneSix}
          </div>
          <div className="MobilePhoneList__mobile mobile7">
            {pocoPhoneSeven}
          </div>
          <div className="MobilePhoneList__mobile mobile8">
            {pocoPhoneEigth}
          </div>
      </section>
    </main>
  )
}

export default Poco