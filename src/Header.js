import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
    const [display,setDisplay]=useState('')
    const [menuLineOne,setMenuLineOne]=useState('')
    const [menuLineTwo,setMenuLineTwo]=useState('')
    const [menuLineThree,setMenuLineThree]=useState('')
    const [displayBrandNames,setDisplayBrandNames]=useState('none')
    const handleOpeningSideBar=()=>{
        setDisplay('flex') ;
        setMenuLineOne("translateY(9.5px) rotateZ(45deg)");
        setMenuLineTwo('transparent');
        setMenuLineThree("translateY(-7px) rotateZ(-45deg)")
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
        <p className='header__p'><Link to="/"><span className='p__partOne'>JRM</span>obiles</Link></p>
        <div className="header__Menu">
            <div className="header__Menu__Line LineOne"style={{transform:menuLineOne}}></div>
            <div className="header__Menu__Line LineTwo"style={{backgroundColor:menuLineTwo}}></div>
            <div className="header__Menu__Line LineThree"style={{transform:menuLineThree}}></div>
        </div>
        <aside className="header__Menu__SideMenu"style={{display:display}}>
              <div className="sideMenu__Div">
                <p className='sideMenu__item home'><Link to="/">Home</Link></p>
                <p className='sideMenu__item brands'>Brands</p>
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
    </header>
  )
}

export default Header