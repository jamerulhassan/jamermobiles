import Header from "./Header";
import Content from "./Content";
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Footer from "./Footer";
import VivoPage from "./VivoPage";
import Samsung from "./Samsung";
import Realme from "./Realme";
import Poco from "./Poco";
import Apple from "./Apple"
import OnePlus from "./OnePluse"
import BuyPage from "./BuyPage";
import About from "./About";
import Help from "./Help";
import MissingPage from "./MissingPage";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useState } from "react";
function App() {
  const [individualData,setIndividualData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const handleVisit = async (API_URL,individual) => {
      try{
        const response = await fetch(`${API_URL}/${individual}`);
        const data = await response.json();  
        setIndividualData(data.fields)
        setFetchError(null)
      }catch(err){
        setFetchError(err.message)
        console.log(err.message);
      }finally{
        setIsLoading(false);
      }
    }
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/vivopage">
          <Route index element={<VivoPage handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} isLoading={isLoading} fetchError={fetchError}/>}/>
        </Route>
        <Route path="/samsung">
          <Route index element={<Samsung handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} isLoading={isLoading} fetchError={fetchError}/>}/>
        </Route>
        <Route path="/realme">
          <Route index element={<Realme handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} isLoading={isLoading} fetchError={fetchError}/>}/>
        </Route>
        <Route path="/poco">
          <Route index element={<Poco handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} isLoading={isLoading} fetchError={fetchError}/>}/>
        </Route>
        <Route path="/apple">
          <Route index element={<Apple handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} isLoading={isLoading} fetchError={fetchError}/>}/>
        </Route>
        <Route path="/onePlus">
          <Route index element={<OnePlus handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} isLoading={isLoading} fetchError={fetchError}/>}/>
        </Route>
        <Route path="/about" element={<About />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="*" element={<MissingPage />}/>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;











/* const getTargetedElement=(e)=>{
      return e.target.parentElement.parentElement
    }
    const getImageOfMobile=(targetElement)=>{
      return targetElement.querySelector('img').src
    }
    const getNameOfMobile=(targetElement)=>{
      return targetElement.querySelector('figcaption .nameOfMobile').textContent
    }
    const getRamRomOfMobile=(targetElement)=>{
      return targetElement.querySelector('figcaption .mobileRamRom').textContent
    }
    const getResolutionOfMobile=(targetElement)=>{
      return targetElement.querySelector('figcaption .mobileResolution').textContent
    }
    const getCameraOfMobile=(targetElement)=>{
      return targetElement.querySelector('figcaption .mobileCamera').textContent
    }
    const getBatteryOfMobile=(targetElement)=>{
      return targetElement.querySelector('figcaption .mobileBattery').textContent
    }
    const getOsOfMobile=(targetElement)=>{
      return targetElement.querySelector('figcaption .mobileOs').textContent
    }
    const getPriceOfMobile=(targetElement)=>{
      return targetElement.querySelector('h2.price').textContent
    }
    const targetElement = getTargetedElement(e)
    const image = getImageOfMobile(targetElement)
    const mobileName = getNameOfMobile(targetElement)
    const mobileRamRom = getRamRomOfMobile(targetElement) 
    const mobileResolution = getResolutionOfMobile(targetElement)
    const mobileCamera = getCameraOfMobile(targetElement)
    const mobileBattery = getBatteryOfMobile(targetElement)
    const mobileOs = getOsOfMobile(targetElement)
    const mobilePrice = getPriceOfMobile(targetElement)
    const mobile={
      mobileImage:image,
      mobileName:mobileName,
      mobileRamRom:mobileRamRom,
      mobileResolution:mobileResolution,
      mobileCamera:mobileCamera,
      mobileBattery:mobileBattery,
      mobileOs:mobileOs,
      mobilePrice:mobilePrice
    }; /* localStorage.setItem("mySessionStorage",JSON.stringify(mobile)) */ 