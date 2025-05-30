import React from 'react'
import './loading.css'
const Loading = () => {
  return (
    <div class = "loadingDiv">
        <div class="loadingContainer">
                <div class="first circle"> </div>
                <div class="second circle"></div>
                <div class="third circle"> </div>
                <div class="fourth circle"></div>
                <div class="border"></div>
        </div>
    </div>
  )
}

export default Loading