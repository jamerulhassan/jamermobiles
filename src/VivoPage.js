import React, { useEffect, useState } from 'react'
import './mobilephoneList.css'
import y305G from './images/y305G.png'
import vivoV40e from './images/vivoV40e.png'
import vivoX100pro from './images/vivoX100pro.png'
import vivoY300plus5g from './images/vivoY300plus5g.png'
import vivoY18i from './images/vivoY18i.png'
import vivoT3Lite5G from './images/vivoT3Lite5G.png'
import vivoT3Pro5G from './images/vivoT3Pro5G.png'
import vivoY100A from './images/vivoY100A.png'
import DisplayPhones from './DisplayPhones'
const VivoPage = ({handleVisit}) => {
  const API_URL = 'https://firestore.googleapis.com/v1/projects/jamermobiles/databases/(default)/documents/vivo';
  const [vivoMobiles, setVivoMobiles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data.documents);
        
        setVivoMobiles(data.documents)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  },[]);

  return (
    <main>
        <section className="MobilePhoneList">
          {isLoading && <p className='loading'>Items are loading...</p>}
          {fetchError && <p>{`error:${fetchError}`}</p>}
          {!isLoading && !fetchError &&
            vivoMobiles.map( mobile =>(
              <DisplayPhones 
              key={mobile.name} 
              individual={mobile.name.split('/').pop()}
              mobile={mobile.fields} 
              handleVisit={handleVisit}
              API_URL={API_URL}
              vivoMobiles={vivoMobiles}/>
            ))
          }
        </section>  
    </main>
  )
}

export default VivoPage