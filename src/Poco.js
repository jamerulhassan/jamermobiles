import React from 'react'
import './mobilephoneList.css'
import { useEffect, useState } from 'react'
import DisplayPhones from './DisplayPhones'
import POCOM65G from './images/POCOM65G.png'
import POCOC65 from './images/POCOC65.png'
import POCOC61 from './images/POCOC61.png'
import POCOX6Neo5G from './images/POCOX6Neo5G.png'
import POCOF65G from './images/POCOF65G.png'
import POCOC55 from './images/POCOC55.png'
import POCOX3Pro from './images/POCOX3Pro.png'
import POCOC51 from './images/POCOC51.png'
const Poco = ({handleVisit}) => {
  const API_URL = 'https://firestore.googleapis.com/v1/projects/jamermobiles/databases/(default)/documents/poco'
    const [pocoMobiles, setpocoMobiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setpocoMobiles(data.documents)
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
                  pocoMobiles.map((mobile)=>(
                    <DisplayPhones 
                      key={mobile.name} 
                      individual={mobile.name.split('/').pop()}
                      mobile={mobile.fields} 
                      handleVisit={handleVisit}
                      API_URL={API_URL}
                      pocoMobiles={pocoMobiles}/>
                  ))
            }
          </section>  
      </main>
    )
  }
export default Poco