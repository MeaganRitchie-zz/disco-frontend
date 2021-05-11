import React from 'react'

export default function CardFront(props) {
  return (
    <div className="card-front" onClick={props.handleClick}>
      <h1>{props.card.letter}</h1>
      <img alt={props.card.letter} src={props.card.url}></img>
    </div>
  )
}

