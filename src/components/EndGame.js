import React, { useState } from 'react'
import '../App.css'

export default function SigninModal(props) {

  const handleClick = () => props.setEndGame(false)

  return (
    <>
      {props.endGame ?
        <div className="modal-end">
          <div className="modal-content-end">
            <button onClick={handleClick} className="end-page-button" >X</button>
            <div className="wrapper-end">
              <span>Y</span>
              <span>A</span>
              <span>Y</span>
              <span>!</span>
            </div>
          </div>
        </div > : null}
    </>
  )
}