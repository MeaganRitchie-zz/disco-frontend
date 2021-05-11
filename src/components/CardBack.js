import React from 'react'

export default function CardBack(props) {
  return (
    <div>
      <div className="card-back" onClick={props.handleClick}></div>
      <div className="card-back" onClick={props.handleClick}></div>
      <div className="card-back" onClick={props.handleClick}></div>
      <div className="card-back" onClick={props.handleClick}></div>
    </div>
  )
}

