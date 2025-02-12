import React from 'react'
import './mobilephoneList.css'
import DisplayPhones from './displayPhones'
import y305G from './images/y305G.png'
import vivoV40e from './images/vivoV40e.png'
import vivoX100pro from './images/vivoX100pro.png'
import vivoY300plus5g from './images/vivoY300plus5g.png'
import vivoY18i from './images/vivoY18i.png'
import vivoT3Lite5G from './images/vivoT3Lite5G.png'
import vivoT3Pro5G from './images/vivoT3Pro5G.png'
import vivoY100A from './images/vivoY100A.png'
const VivoPage = ({handleVisit}) => {
  const vivoPhoneOne=DisplayPhones(y305G,"vivo Y30 5G","6 GB RAM | 128 GB ROM | Expandable Upto 256 GB","6.51 inches HD+ Display","50MP + 2MP | 8MP Front Camera","5000 mAh Battery","MediaTek Dimensity 700 ,Android, Funtouch OS 12","18,990",handleVisit)
  const vivoPhoneTwo=DisplayPhones(vivoV40e,"vivo V40e","RAM 8 GB |ROM 256","Display 6.77-inch (1080x2392)","Rear Camera, 50 MP + 8 MP ; Front Camera, 50 MP","5500mAh battery","Mediatek Dimensity,Android 14, Funtouch 14","26,175",handleVisit)
  const vivoPhoneThree=DisplayPhones(vivoX100pro,"vivo X100 Pro","RAM 12GB | 256GB","Display 6.78-inch (1260x2800)","Rear Camera, 50MP + 50MP + 64MP ; Front Camera, 32MP","5400 mAh battery","OS Android 14","34,000",handleVisit)
  const vivoPhoneFour=DisplayPhones(vivoY300plus5g,"vivo Y300 Plus 5G","8 GB RAM | 128 GB ROM | Expandable Upto 1 TB","17.22 cm (6.78 inch) Display","50MP + 2MP | 32MP Front Camera","5000 mAh Battery","695 Processor","23,999",handleVisit)
  const vivoPhoneFive=DisplayPhones(vivoY18i,"vivo Y18i","4 GB RAM | 64 GB ROM | Expandable Upto 1 TB","16.66 cm (6.56 Inch) Display","13MP + 0.08MP | 5MP Front Camera","5000 mAh Battery","UNISCO T616 Processor","7,998",handleVisit)
  const vivoPhoneSix=DisplayPhones(vivoT3Lite5G,"vivo T3 Lite 5G","6 GB RAM | 128 GB ROM | Expandable Upto 1 TB","16.66 cm (6.56 inch) Display","50MP + 2MP | 8MP Front Camera","5000 mAh Battery","Dimensity 6300 Processor","15,499",handleVisit)
  const vivoPhoneSeven=DisplayPhones(vivoT3Pro5G,"vivo T3 Pro 5G","8 GB RAM | 128 GB ROM","17.2 cm (6.77 inch) Full HD+ AMOLED Display","50MP + 8MP | 16MP Front Camera","5500 mAh Battery","Snapdragon 7 Gen 3 Processor","24,999",handleVisit)
  const vivoPhoneEigth=DisplayPhones(vivoY100A,"vivo Y100A","8 GB RAM | 256 GB ROM","16.21 cm (6.38 inch) Full HD+ Display","64MP + 2MP + 2MP | 16MP Front Camera","4500 mAh battery","Snapdragon 695 Processor","23,999",handleVisit)
  const vivoPhones=[
    {id:1,phone:vivoPhoneOne},
    {id:2,phone:vivoPhoneTwo},
    {id:3,phone:vivoPhoneThree},
    {id:4,phone:vivoPhoneFour},
    {id:5,phone:vivoPhoneFive},
    {id:6,phone:vivoPhoneSix},
    {id:7,phone:vivoPhoneSeven},
    {id:8,phone:vivoPhoneEigth}]
  return (
    <main>
        <section className="MobilePhoneList">
        {
          vivoPhones.map(phone=>(
            <div className="MobilePhoneList__mobile mobile1" >
            {phone.phone}
          </div>
          ))
        }
        </section>  
    </main>
  )
}

export default VivoPage