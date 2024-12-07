import React from 'react'
import './MissingPage.css'
import { Link } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa6'
const MissingPage = () => {
  return (
    <main>
      <div className="errorMsg">
         <h1 className='errorMsg__msg'>Oops, you're on the wrong page!</h1>
         <div className='errorMsg__link'><h2>Click here to visit Home Page </h2>
         <FaArrowDown size={50}/>
         <Link to="/">
            <button className='link__btn'><h3>Home</h3></button>
         </Link></div>
      </div>
    </main>
  )
}

export default MissingPage