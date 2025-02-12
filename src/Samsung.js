import React from 'react'
import './mobilephoneList.css'
import DisplayPhones from './displayPhones'
import SAMSUNGGalaxyA145G from './images/SAMSUNGGalaxyA145G.png'
import SAMSUNGGalaxyF05 from './images/SAMSUNGGalaxyF05.png'
import SAMSUNGGalaxyS23FE from './images/SAMSUNGGalaxyS23FE.png'
import SAMSUNGM05 from './images/SAMSUNGM05.png'
import SAMSUNGGalaxyS245G from './images/SAMSUNGGalaxyS245G.png'
import SAMSUNGGalaxyM355G from './images/SAMSUNGGalaxyM355G.png'
import SAMSUNGGalaxyA545G from './images/SAMSUNGGalaxyA545G.png'
import SAMSUNGGalaxyA155G from './images/SAMSUNGGalaxyA155G.png'
const Samsung = ({handleVisit}) => {
  const samsungPhoneOne=DisplayPhones(SAMSUNGGalaxyA145G,"SAMSUNG Galaxy A14 5G","6 GB RAM128 GB ROM | Expandable Upto 1 TB","16.76 cm (6.6 inch) Full HD+ Display","50MP + 2MP + 2MP | 13MP Front Camera","5000 mAh Lithium Ion Battery","Exynos 1330 Processor","20,999",handleVisit)
  const samsungPhoneTwo=DisplayPhones(SAMSUNGGalaxyF05,"SAMSUNG Galaxy F05","4 GB RAM | 64 GB ROM | Expandable Upto 1 TB","17.12 cm (6.74 inch) HD+ Display","50MP + 2MP | 8MP Front Camera","5000 mAh Battery","Helio G85 Processor","9,999",handleVisit)
  const samsungPhoneThree=DisplayPhones(SAMSUNGGalaxyS23FE,"SAMSUNG Galaxy S23 FE","8 GB RAM | 128 GB ROM","16.26 cm (6.4 inch) Full HD+ Display","50MP + 12MP | 10MP Front Camera","4500 mAh Battery","Samsung Exynos 2200 Processor","55,999",handleVisit)
  const samsungPhoneFour=DisplayPhones(SAMSUNGM05,"SAMSUNG M05","4 GB RAM | 64 GB ROM","17.02 cm (6.7 inch) Display","50MP Rear Camera","5000 mAh Battery","Mediatek Helio G85,Android 14","9,999",handleVisit)
  const samsungPhoneFive=DisplayPhones(SAMSUNGGalaxyS245G,"SAMSUNG Galaxy S24+ 5G","12 GB RAM | 256 GB ROM","17.02 cm (6.7 inch) Quad HD+ Display","50MP + 10MP + 12MP | 12MP Front Camera","4900 mAh Battery","Exynos 2400 Processor","64,999",handleVisit)
  const samsungPhoneSix=DisplayPhones(SAMSUNGGalaxyM355G,"SAMSUNG Galaxy M35 5G","6 GB RAM | 128 GB ROM","16.76 cm (6.6 inch) Display","50MP Rear Camera","6000 mAh Battery","Exynos 1380,Android 14","16,383",handleVisit)
  const samsungPhoneSeven=DisplayPhones(SAMSUNGGalaxyA545G,"SAMSUNG Galaxy A54 5G","8 GB RAM | 256 GB ROM | Expandable Upto 1 TB","16.26 cm (6.4 inch) Full HD+ Display","50MP + 12MP + 5MP | 32MP Front Camera","5000 mAh Battery","Exynos 1380, Octa Core Processor","37,499",handleVisit)
  const samsungPhoneEigth=DisplayPhones(SAMSUNGGalaxyA155G,"SAMSUNG Galaxy A15 5G","8 GB RAM | 128 GB ROM | Expandable Upto 1 TB","16.51 cm (6.5 inch) Full HD+ Display","50MP + 5MP + 2MP | 13MP Front Camera","5000 mAh Battery","Dimensity 6100+ Processor","16,990",handleVisit)
  const samsungPhones=[
    {id:1,phone:samsungPhoneOne},
    {id:2,phone:samsungPhoneTwo},
    {id:3,phone:samsungPhoneThree},
    {id:4,phone:samsungPhoneFour},
    {id:5,phone:samsungPhoneFive},
    {id:6,phone:samsungPhoneSix},
    {id:7,phone:samsungPhoneSeven},
    {id:8,phone:samsungPhoneEigth}]
  return (
    <main>
        <section className="MobilePhoneList">
        {
          samsungPhones.map(phone=>(
            <div className="MobilePhoneList__mobile mobile1" >
            {phone.phone}
          </div>
          ))
        }
        </section>  
    </main>
  )
}

export default Samsung