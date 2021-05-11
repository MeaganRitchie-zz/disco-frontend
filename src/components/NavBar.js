import React from 'react'
import sun from '../images/sun.png'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <img className="logo" alt="sunshine" src={sun}></img>
      <ul className="links">
        <li><a>MENU</a></li>
        <li><a>SEARCH</a></li>
        <li><a>HELP</a></li>
      </ul>
    </div>
  )
}
