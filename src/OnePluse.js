import React from 'react'
import './mobilephoneList.css'
import { useEffect, useState } from 'react'
import DisplayPhones from './DisplayPhones'
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