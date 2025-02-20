import React from 'react'
import './mobilephoneList.css'
import  { useEffect, useState } from 'react'
import DisplayPhones from './displayPhones'
const Realme = ({handleVisit}) => {
  const API_URL = 'https://firestore.googleapis.com/v1/projects/jamermobiles/databases/(default)/documents/realme'
    const [realmeMobiles, setrealmeMobiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setrealmeMobiles(data.documents)
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
                realmeMobiles.map((mobile)=>(
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
export default Realme