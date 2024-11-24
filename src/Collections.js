import React from 'react'
import './Collections.css'
import Disclimer from './Disclimer'
import BrandList from './BrandList'
const Collections = () => {
  return (
    <section id='collection' className="Collections">
        <div className="Collection__disclimer collectionContentOne">
            <BrandList />
        </div>
        <div className="Collection__disclimer collectionContentTwo">
            <Disclimer />
        </div>
    </section>
  )
}

export default Collections