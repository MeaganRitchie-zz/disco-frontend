import React from 'react'
import gif from '../images/HowToPlay.gif'
import { Link } from 'react-router-dom'
export default function Help() {

  return (
    <div className="help-page">
      <Link to="/leveltwo"><button className="help-page-button" >X</button></Link>
      <h1> How To Play
        <p> Find a picture and it's matching beginning sound.</p>
        <p> Say each word or letter sound each time you flip a card.</p>
      </h1>
      <img className="gif" src={gif} alt="match cards video"></img>
    </div>
  )
}
