import React from 'react'
import './mobilephoneList.css'
import DisplayPhones from './displayPhones'
import realmeP1Pro5G from './images/realmeP1Pro5G.png'
import realme125G from './images/realme125G.png'
import realmeC63 from './images/realmeC63.png'
import realmeP2Pro5G from './images/realmeP2Pro5G.png'
import realme70TURBO5G from './images/realme70TURBO5G.png'
import realme13Pro5G from './images/realme13Pro5G.png'
import realmeP1Speed5G from './images/realmeP1Speed5G.png'
import realmeNARZO70X5G from './images/realmeNARZO70X5G.png'
const Realme = ({handleVisit}) => {
  const realmePhoneOne=DisplayPhones(realmeP1Pro5G,"realme P1 Pro 5G","8 GB RAM | 128 GB ROM","17.02 cm (6.7 inch) Full HD+ Display","50MP + 8MP | 16MP Front Camera","5000 mAh Battery","6 Gen 1 Processor","19,999",handleVisit)
  const realmePhoneTwo=DisplayPhones(realme125G,"realme 12x 5G","8 GB RAM | 128 GB ROM | Expandable Upto 2 TB","17.07 cm (6.72 inch) Full HD+ Display","50MP + 2MP | 8MP Front Camera","5000 mAh Battery","Dimensity 6100+ Processor","13,499",handleVisit)
  const realmePhoneThree=DisplayPhones(realmeC63,"realme C63","4 GB RAM | 64 GB ROM | Expandable Upto 2 TB","17.13 cm (6.745 inch) HD+ Display","50MP Rear Camera | 8MP Front Camera","5000 mAh Battery","T612 Processor","8,499",handleVisit)
  const realmePhoneFour=DisplayPhones(realmeP2Pro5G,"realme P2 Pro 5G","8 GB RAM | 128 GB ROM","17.02 cm (6.7 inch) Full HD+ Display","50MP + 8MP | 32MP Front Camera","5200 mAh Battery","7s Gen2 Processor","21,999",handleVisit)
  const realmePhoneFive=DisplayPhones(realme70TURBO5G,"realme 70 TURBO 5G","6 GB RAM | 128 GB ROM","16.94 cm (6.67 inch) Full HD+ Display","50MP Rear Camera","5000 mAh Battery","Segment's Fastest Dimensity 7300 Energy 5G Processor","16,278",handleVisit)
  const realmePhoneSix=DisplayPhones(realme13Pro5G,"realme 13 Pro+ 5G","8 GB RAM | 256 GB ROM","17.02 cm (6.7 inch) Full HD+ Display","50MP + 8MP + 50MP | 32MP Front Camera","5200 mAh Battery","Snapdragon 7s Gen2 Processor","32,999",handleVisit)
  const realmePhoneSeven=DisplayPhones(realmeP1Speed5G,"realme P1 Speed 5G","12 GB RAM | 256 GB ROM | Expandable Upto 2 TB","16.94 cm (6.67 inch) Full HD+ Display","50MP + 2MP | 16MP Front Camera","5000 mAh Battery","Dimensity 7300 Energy Processor","20,999",handleVisit)
  const realmePhoneEigth=DisplayPhones(realmeNARZO70X5G,"realme NARZO 70X 5G","8 GB RAM | 128 GB ROM","17.07 cm (6.72 inch) Display","50MP Rear Camera","5000 mAh Battery","Dimensity 6100 Plus, Octa Core Processor","13,425",handleVisit)
  return (
    <main>
      <section>
          <div className="MobilePhoneList__mobile mobile1">
            {realmePhoneOne}
          </div>
          <div className="MobilePhoneList__mobile mobile2">
            {realmePhoneTwo}
          </div>
          <div className="MobilePhoneList__mobile mobile3">
            {realmePhoneThree}
          </div>
          <div className="MobilePhoneList__mobile mobile4">
            {realmePhoneFour}
          </div>
          <div className="MobilePhoneList__mobile mobile5">
            {realmePhoneFive}
          </div>
          <div className="MobilePhoneList__mobile mobile6">
            {realmePhoneSix}
          </div>
          <div className="MobilePhoneList__mobile mobile7">
            {realmePhoneSeven}
          </div>
          <div className="MobilePhoneList__mobile mobile8">
            {realmePhoneEigth}
          </div>
      </section>
    </main>
  )
}

export default Realme