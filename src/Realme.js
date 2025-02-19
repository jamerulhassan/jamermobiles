import React from 'react'
import './mobilephoneList.css'
import  { useEffect, useState } from 'react'
import DisplayPhones from './DisplayPhones'
import realmeP1Pro5G from './images/realmeP1Pro5G.png'
import realme125G from './images/realme125G.png'
import realmeC63 from './images/realmeC63.png'
import realmeP2Pro5G from './images/realmeP2Pro5G.png'
import realme70TURBO5G from './images/realme70TURBO5G.png'
import realme13Pro5G from './images/realme13Pro5G.png'
import realmeP1Speed5G from './images/realmeP1Speed5G.png'
import realmeNARZO70X5G from './images/realmeNARZO70X5G.png'
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
                  individual={mobile.name.split('/').pop()}
                  mobile={mobile.fields} 
                  handleVisit={handleVisit}
                  API_URL={API_URL}
                  realmeMobiles={realmeMobiles}/>
                ))
              }
          </section>  
      </main>
    )
  }
export default Realme