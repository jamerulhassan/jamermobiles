import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { FaArrowDown, FaCartArrowDown } from 'react-icons/fa'
const Header = () => {
    const [display,setDisplay]=useState('none')
    const [dropDownDisplay,setDropDownDisplay]=useState('none')
    const [menuLineOne,setMenuLineOne]=useState('')
    const [menuLineTwo,setMenuLineTwo]=useState('')
    const [menuLineThree,setMenuLineThree]=useState('')
    const [displayBrandNames,setDisplayBrandNames]=useState('none')
    const handleOpeningSideBar=()=>{
        setDisplay('flex') ;
        setMenuLineOne("translateY(10px) rotateZ(45deg)");
        setMenuLineTwo('transparent');
        setMenuLineThree("translateY(-10px) rotateZ(-45deg)")
        document.querySelector('.header__Menu__SideMenu').classList.add('open');
    }
    const handleClosingSideBar=(e)=>{
      setDisplay('none')
      setMenuLineOne("");
      setMenuLineTwo("");
      setMenuLineThree("")
      setDisplayBrandNames('none')
      document.querySelector('.header__Menu__SideMenu').classList.remove('open');
    }
    onclick=(e)=>{
      const className=e.target.className;
      (className === 'header__Menu__Line LineOne' ||
      className === 'header__Menu__Line LineTwo' ||
      className === 'header__Menu__Line LineThree' ||
      className === 'header__Menu smallMenu__item' ||
      className === 'header__Menu__SideMenu smallMenu__item') ?
      handleOpeningSideBar():handleClosingSideBar(e);
      if(display === 'flex'){
        (className === 'header__Menu__SideMenu smallMenu__item' || className === 'sideMenu__item') ?
        handleOpeningSideBar():handleClosingSideBar(e)
      }
      if(className === 'sideMenu__item brandInSmallMenu' && displayBrandNames === 'none'){
        setDisplayBrandNames('block')
        handleOpeningSideBar()
      }
      if(className === 'sideMenu__item brandInSmallMenu' && displayBrandNames === 'block'){
        setDisplayBrandNames('none')
        handleOpeningSideBar()
      }
      if(className === 'brandInLargeMenu' && dropDownDisplay === 'none' ){
        setDropDownDisplay('flex')
      }
      else{
        setDropDownDisplay('none')
      }
    }
  return (
    <header>
        <div className="header__logo">
          <p className='header__p'><Link to="/"><span className='p__partOne'>JRM</span>obiles</Link></p>
        </div>       
        <div className="largeMenu">
          <p className='home largeMenu__item'><Link to="/">Home</Link></p>
          <div className='brandsDiv largeMenu__item'><p className='brandInLargeMenu'>Brand<FaCartArrowDown/></p>
            <div className='dropDown largeMenu__item' style={{display:dropDownDisplay}}>
                <p><Link to="/vivopage">Vivo</Link></p>
                <p><Link to="/samsung">Samsung</Link></p>
                <p><Link to="/realme">Realme</Link></p>
                <p><Link to="/poco">Poco</Link></p>
                <p><Link to="/apple">Apple</Link></p>
                <p><Link to="/onePlus">1+plus</Link></p>
            </div>
          </div>
          <p className='help largeMenu__item'><Link to="/help">Help</Link></p>
          <p className='about largeMenu__item'><Link to="/about">About</Link></p>
        </div>
        <div className="smallMenu">
          <div className="header__Menu smallMenu__item">
              <div className="header__Menu__Line LineOne"style={{transform:menuLineOne}}></div>
              <div className="header__Menu__Line LineTwo"style={{backgroundColor:menuLineTwo}}></div>
              <div className="header__Menu__Line LineThree"style={{transform:menuLineThree}}></div>
          </div>
          <aside className="header__Menu__SideMenu smallMenu__item"style={{display:display}}>
                <div className="sideMenu__Div">
                  <p className='sideMenu__item home'><Link to="/">Home</Link></p>
                  <p className='sideMenu__item brandInSmallMenu'>Brands</p>
                  <div className="sideMenu__Item BrandsNames" style={{display:displayBrandNames}}>
                    <p><Link to="/vivopage">Vivo</Link></p>
                    <p><Link to="/samsung">Samsung</Link></p>
                    <p><Link to="/realme">Realme</Link></p>
                    <p><Link to="/poco">Poco</Link></p>
                    <p><Link to="/apple">Apple</Link></p>
                    <p><Link to="/onePlus">1+plus</Link></p>
                  </div>
                  <p className='sideMenu__item'><Link to="/help">Help</Link></p>
                  <p className='sideMenu__item'><Link to="/about">About</Link></p>
                </div>
          </aside>
        </div>
    </header>
  )
}

export default Header