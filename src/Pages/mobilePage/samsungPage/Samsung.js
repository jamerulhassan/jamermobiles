import React from 'react'
import '../commonMobileCss/mobilephoneList.css'
import  { useEffect, useState } from 'react'
import DisplayPhones from '../../../Components/mobilePagesComponent/DisplayPhones'
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
                  mobile={mobile.fields} 
                  handleVisit={handleVisit}
                  />
                ))
              }
          </section>  
      </main>
    )
  }
export default Samsung