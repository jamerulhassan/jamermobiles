import React from 'react'
import './mobilephoneList.css'
import  { useEffect, useState } from 'react'
import DisplayPhones from './DisplayPhones'
import SAMSUNGGalaxyA145G from './images/SAMSUNGGalaxyA145G.png'
import SAMSUNGGalaxyF05 from './images/SAMSUNGGalaxyF05.png'
import SAMSUNGGalaxyS23FE from './images/SAMSUNGGalaxyS23FE.png'
import SAMSUNGM05 from './images/SAMSUNGM05.png'
import SAMSUNGGalaxyS245G from './images/SAMSUNGGalaxyS245G.png'
import SAMSUNGGalaxyM355G from './images/SAMSUNGGalaxyM355G.png'
import SAMSUNGGalaxyA545G from './images/SAMSUNGGalaxyA545G.png'
import SAMSUNGGalaxyA155G from './images/SAMSUNGGalaxyA155G.png'
const Samsung = ({handleVisit}) => {
  const API_URL = 'https://firestore.googleapis.com/v1/projects/jamermobiles/databases/(default)/documents/samsung'
    const [samsungMobiles, setsamsungMobiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setsamsungMobiles(data.documents)
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
                samsungMobiles.map((mobile)=>(
                  <DisplayPhones 
                  key={mobile.name} 
                  individual={mobile.name.split('/').pop()}
                  mobile={mobile.fields} 
                  handleVisit={handleVisit}
                  API_URL={API_URL}
                  samsungMobiles={samsungMobiles}/>
                ))
              }
          </section>  
      </main>
    )
  }
export default Samsung