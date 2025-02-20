import Header from "./Components/Header/Header";
import Content from "./Components/mainPageContent/Content";
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import VivoPage from "./Pages/mobilePage/vivoPage/VivoPage";
import Samsung from "./Pages/mobilePage/samsungPage/Samsung";
import Realme from "./Pages/mobilePage/realmePage/Realme";
import Poco from "./Pages/mobilePage/pocoPage/Poco";
import Apple from "./Pages/mobilePage/applePage/Apple"
import OnePlus from "./Pages/mobilePage/onePlusPage/OnePluse"
import BuyPage from "./Pages/buyPage/BuyPage";
import About from "./Pages/aboutPage/About";
import Help from "./Pages/helpPage/Help";
import MissingPage from "./Pages/missingPage/MissingPage";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
function App() {
  const [individualData,setIndividualData] = useState({})
  const handleVisit=(mobile) => { 
        setIndividualData(mobile)      
    }
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/vivopage">
          <Route index element={<VivoPage handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} />}/>
        </Route>
        <Route path="/samsung">
          <Route index element={<Samsung handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} />}/>
        </Route>
        <Route path="/realme">
          <Route index element={<Realme handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} />}/>
        </Route>
        <Route path="/poco">
          <Route index element={<Poco handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} />}/>
        </Route>
        <Route path="/apple">
          <Route index element={<Apple handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} />}/>
        </Route>
        <Route path="/onePlus">
          <Route index element={<OnePlus handleVisit={handleVisit}/>}/>
          <Route path="BuyPage" element={<BuyPage individualData={individualData} />}/>
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