import React from 'react'
import './mobilephoneList.css'
import { useEffect, useState } from 'react'
import DisplayPhones from './DisplayPhones'
import AppleiPhone15 from './images/AppleiPhone15.png'
import AppleiPhone16Plus from './images/AppleiPhone16Plus.png'
import AppleiPhone16Pro from './images/AppleiPhone16Pro.png'
import AppleiPhone16 from './images/AppleiPhone16.png'
import AppleiPhone15Plus from './images/AppleiPhone15Plus.png'
import AppleiPhone15ProMax from './images/AppleiPhone15ProMax.png'
import AppleiPhone15Pro from './images/AppleiPhone15Pro.png'
import AppleiPhone12 from './images/AppleiPhone12.png'
const Apple = ({handleVisit}) => {
  const API_URL='https://firestore.googleapis.com/v1/projects/jamermobiles/databases/(default)/documents/apple';

    const [appleMobiles, setappleMobiles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [fetchError, setFetchError] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          setappleMobiles(data.documents)
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
              appleMobiles.map((mobile)=>(
                <DisplayPhones 
                key={mobile.name} 
                individual={mobile.name.split('/').pop()}
                mobile={mobile.fields} 
                handleVisit={handleVisit}
                API_URL={API_URL}
                appleMobiles={appleMobiles}/>
              ))
            }
          </section>  
      </main>
    )
  }
export default Apple