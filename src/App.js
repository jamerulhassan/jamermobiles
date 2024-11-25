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
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
function App() {
  const [image, setImage] = useState('');
        const [mobileName, setMobileName] = useState('');
        const [mobileRamRom, setMobileRamRom] = useState('');
        const [mobileResolution, setMobileResolution] = useState('');
        const [mobileCamera, setMobileCamera] = useState('');
        const [mobileBattery, setMobileBattery] = useState('');
        const [mobileOs, setMobileOs] = useState('');
        const [mobilePrice, setMobilePrice] = useState('');
        const [targetElement, setTargetElement] = useState('');
        const handleVisit = (e) => {
          const targetElement = e.target.parentElement.parentElement;
          const image = targetElement.querySelector('img').src;
          const mobileName = targetElement.querySelector('figcaption .nameOfMobile').textContent;
          const mobileRamRom = targetElement.querySelector('figcaption .mobileRamRom').textContent;
          const mobileResolution = targetElement.querySelector('figcaption .mobileResolution').textContent;
          const mobileCamera = targetElement.querySelector('figcaption .mobileCamera').textContent;
          const mobileBattery = targetElement.querySelector('figcaption .mobileBattery').textContent;
          const mobileOs = targetElement.querySelector('figcaption .mobileOs').textContent;
          const mobilePrice = targetElement.querySelector('h2.price').textContent;
          setTargetElement(targetElement);
          setImage(image);
          setMobileName(mobileName);
          setMobileRamRom(mobileRamRom);
          setMobileResolution(mobileResolution);
          setMobileCamera(mobileCamera);
          setMobileBattery(mobileBattery);
          setMobileOs(mobileOs);
          setMobilePrice(mobilePrice);
          const mobile={
            mobileImage:image,
            mobileName:mobileName,
            mobileRamRom:mobileRamRom,
            mobileResolution:mobileResolution,
            mobileCamera:mobileCamera,
            mobileBattery:mobileBattery,
            mobileOs:mobileOs,
            mobilePrice:mobilePrice
          };  
          localStorage.setItem("mySessionStorage",JSON.stringify(mobile))
        };
  return (
    <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Content />}/>
          <Route path="/vivopage">
            <Route index element={<VivoPage 
            handleVisit={handleVisit}
            />}/>
            <Route path="BuyPage" element={<BuyPage
            image={image}
            mobileName={mobileName}
            mobileRamRom={mobileRamRom}
            mobileResolution={mobileResolution}
            mobileCamera={mobileCamera}
            mobileBattery={mobileBattery}
            mobileOs={mobileOs}
            mobilePrice={mobilePrice}
            />}/>
          </Route>
          <Route path="/samsung">
            <Route index element={<Samsung 
            handleVisit={handleVisit}
            />}/>
            <Route path="BuyPage" element={<BuyPage
            image={image}
            mobileName={mobileName}
            mobileRamRom={mobileRamRom}
            mobileResolution={mobileResolution}
            mobileCamera={mobileCamera}
            mobileBattery={mobileBattery}
            mobileOs={mobileOs}
            mobilePrice={mobilePrice}
            />}/>
          </Route>
          <Route path="/realme">
            <Route index element={<Realme 
            handleVisit={handleVisit}
            />}/>
            <Route path="BuyPage" element={<BuyPage
            image={image}
            mobileName={mobileName}
            mobileRamRom={mobileRamRom}
            mobileResolution={mobileResolution}
            mobileCamera={mobileCamera}
            mobileBattery={mobileBattery}
            mobileOs={mobileOs}
            mobilePrice={mobilePrice}
            />}/>
          </Route>
          <Route path="/poco">
            <Route index element={<Poco 
            handleVisit={handleVisit}
            />}/>
            <Route path="BuyPage" element={<BuyPage
            image={image}
            mobileName={mobileName}
            mobileRamRom={mobileRamRom}
            mobileResolution={mobileResolution}
            mobileCamera={mobileCamera}
            mobileBattery={mobileBattery}
            mobileOs={mobileOs}
            mobilePrice={mobilePrice}
            />}/>
          </Route>
          <Route path="/apple">
            <Route index element={<Apple
            handleVisit={handleVisit}
            />}/>
            <Route path="BuyPage" element={<BuyPage
            image={image}
            mobileName={mobileName}
            mobileRamRom={mobileRamRom}
            mobileResolution={mobileResolution}
            mobileCamera={mobileCamera}
            mobileBattery={mobileBattery}
            mobileOs={mobileOs}
            mobilePrice={mobilePrice}
            />}/>
          </Route>
          <Route path="/onePlus">
            <Route index element={<OnePlus
            handleVisit={handleVisit}
            />}/>
            <Route path="BuyPage" element={<BuyPage
            image={image}
            mobileName={mobileName}
            mobileRamRom={mobileRamRom}
            mobileResolution={mobileResolution}
            mobileCamera={mobileCamera}
            mobileBattery={mobileBattery}
            mobileOs={mobileOs}
            mobilePrice={mobilePrice}
            />}/>
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
