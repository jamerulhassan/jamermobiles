import React from 'react'
import './mobilephoneList.css'
import { useEffect, useState } from 'react'
import DisplayPhones from './DisplayPhones'
import OnePlusNordCE3Lite5G from './images/OnePlusNordCE3Lite5G.png'
import OnePlusNordCE4lite5G from './images/OnePlusNordCE4lite5G.png'
import OnePlusNordCE4 from './images/OnePlusNordCE4.png'
import OnePlus12R from './images/OnePlus12R.png'
import OnePlusNord35G from './images/OnePlusNord35G.png'
import OnePlusNordCE2Lite5G from './images/OnePlusNordCE2Lite5G.png'
import OnePlus11R5G from './images/OnePlus11R5G.png'
import OnePlus12 from './images/OnePlus12.png'
const OnePlus = ({handleVisit}) => {
    const API_URL = 'https://firestore.googleapis.com/v1/projects/jamermobiles/databases/(default)/documents/onePlus'
    const [onePlusMobiles, setonePlusMobiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setonePlusMobiles(data.documents)
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
                    onePlusMobiles.map((mobile)=>(
                      <DisplayPhones 
                        key={mobile.name} 
                        individual={mobile.name.split('/').pop()}
                        mobile={mobile.fields} 
                        handleVisit={handleVisit}
                        API_URL = {API_URL}
                        onePlusMobiles={onePlusMobiles}/>
                    ))
              }
          </section>  
      </main>
    )
  }

export default OnePlus