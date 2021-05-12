import React from 'react'

export default function CardFront(props) {
  const displayLetter = () => {
    return <p>{props.letter}</p>
  }

  const displayImage = () => {
    return <img src={props.url} />
  }

  return (
    <div className="card-front" onClick={props.handleClick}>
      {props.letter ? displayLetter() : displayImage()}
    </div>
  )
}

