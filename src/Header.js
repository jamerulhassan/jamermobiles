import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Collections from './Collections'
import { FaLine, FaSquare, FaUnderline } from 'react-icons/fa6'
const Header = () => {
const [display,setDisplay]=useState('')
const [menuLineOne,setMenuLineOne]=useState('')
const [menuLineTwo,setMenuLineTwo]=useState('')
const [menuLineThree,setMenuLineThree]=useState('')
const [displayBrandNames,setDisplayBrandNames]=useState('none')
const handleOpeningSideBar=()=>{
    setDisplay('flex') ;
    setMenuLineOne("translateY(8px) rotateZ(45deg)");
    setMenuLineTwo('transparent');
    setMenuLineThree("translateY(-8px) rotateZ(-45deg)")
}
const handleClosingSideBar=(e)=>{
  setDisplay('none')
  setMenuLineOne("");
  setMenuLineTwo("");
  setMenuLineThree("")
  setDisplayBrandNames('none')
}
 onclick=(e)=>{
  const className=e.target.className;
  (className === 'header__Menu__Line LineOne' ||
  className === 'header__Menu__Line LineTwo' ||
  className === 'header__Menu__Line LineThree' ||
  className === 'header__Menu' ||
  className === 'header__Menu__SideMenu') ?
  handleOpeningSideBar():handleClosingSideBar(e);
  if(display === 'flex'){
    (className === 'header__Menu__SideMenu' || className === 'sideMenu__item') ?
    handleOpeningSideBar():handleClosingSideBar(e)
  }
  if(className === 'sideMenu__item brands' && displayBrandNames === 'none'){
     setDisplayBrandNames('block')
     handleOpeningSideBar()
  }
  if(className === 'sideMenu__item brands' && displayBrandNames === 'block'){
    setDisplayBrandNames('none')
    handleOpeningSideBar()
  }
 }
  return (
    <header>
         <h1 className='header__H1'>JRMobiles</h1>
         <div className="header__Menu">
              <div className="header__Menu__Line LineOne"
              style={{transform:menuLineOne}}
              ></div>
              <div className="header__Menu__Line LineTwo"
              style={{backgroundColor:menuLineTwo}}
              ></div>
              <div className="header__Menu__Line LineThree"
              style={{transform:menuLineThree}}
              ></div>
              <aside className="header__Menu__SideMenu"
              style={{display:display}}
              >
                <div className="sideMenu__Div">
                    <h3 className='sideMenu__item home'><Link to="/">Home</Link></h3>
                    {/* <h3 className='sideMenu__item'><a href='#collection'>Collections</a></h3> */}
                    <h3 className='sideMenu__item brands'>Brands</h3>
                    <div className="sideMenu__Item BrandsNames" style={{display:displayBrandNames}}>
                      <h4><Link to="/vivopage">VIVO</Link></h4>
                      <h4><Link to="/samsung">SAMSUNG</Link></h4>
                      <h4><Link to="/realme">REALME</Link></h4>
                      <h4><Link to="/poco">POCO</Link></h4>
                      <h4><Link to="/apple">APPLE</Link></h4>
                      <h4><Link to="/onePlus">1+plus</Link></h4>
                    </div>
                    <h3 className='sideMenu__item'><Link to="/help">Help</Link></h3>
                    <h3 className='sideMenu__item'><Link to="/about">About</Link></h3>
                </div>
              </aside>
         </div>
    </header>
  )
}

export default Header