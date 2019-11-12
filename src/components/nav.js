import React from 'react'
import './../styling/sidenav.css'
import twitter from './image/twitter.svg'

export default function Nav(props){
    return (
        <div className="side-panel a">
           <nav>
  <ul>
    <li>
      <div className="home-icon">
        <div className="roof">
          <div className="roof-edge"></div>
        </div>
        <div className="front"></div>
      </div>
    </li>
    <li>
      <div className="about-icon">
        <div className="head">
          <div className="eyes"></div>
          <div className="beard"></div>
        </div>
      </div>
    </li>
    <li>
      <div className="work-icon">
        <img src={twitter}></img>
      </div>
    </li>
    <li>
      <div className="mail-icon">
        <div className="mail-base">
          <div className="mail-top"></div>
        </div>
      </div>
    </li>
  </ul>
</nav>


        </div>
    )
}