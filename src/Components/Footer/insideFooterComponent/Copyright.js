import React from 'react'

const Copyright = () => {
    const today=new Date()
  return (
    <>
        <div className="content5__copyright content">
            <h3 className="content__title title1">Copyright</h3>
            <p className="content__item item1">
            &copy; jamerMobiles {today.getFullYear()}. All Rights Reserved. <br />
            Powered by jamer Web Development
            </p>
        </div>
    </>
  )
}

export default Copyright