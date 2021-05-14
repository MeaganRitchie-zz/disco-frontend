import React from 'react'

export default function CardFront(props) {
  const displayLetter = () => {
    return <p>{props.letter}</p>
  }

  const displayImage = () => {
    return <img src={props.url} />
  }

  return (
    <div style={props.isClicked ? { backgroundColor: "#03cea4" } : { backgroundColor: "#f4b333" }} className="card-front" onClick={props.handleClick} onClick={props.handleMatch} >
      <div className="card-details">
        {props.letter ? displayLetter() : displayImage()}
      </div>
    </div >
  )
}

