import React from 'react'
import sun from '../images/sun.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <img className="logo" alt="sunshine" src={sun}></img>
      <ul className="links">
        <li><Link to="/help" style={{ textDecoration: 'none', color: '#fffafa' }}> HELP </Link> </li>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#fffafa' }}> EXIT </Link> </li>
      </ul>
    </div >
  )
}
