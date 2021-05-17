import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function SigninModal(props) {

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(props.username)
    props.onClick()
  }

  return (
    <>
      {props.show ?
        <div className="modal">
          <div className="wrapper">
            <span>D</span>
            <span>I</span>
            <span>S</span>
            <span>C</span>
            <span>O</span>
            <span>!</span>
          </div>
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input className="name-input"
                  placeholder="NAME"
                  type="text" name="username"
                  value={props.username}
                  onChange={props.handleChange} />
                <div className="modal-footer">
                  <Link style={{ textDecoration: 'none' }} to="/levelone" path><input type="submit" value="easy" className="play-button" /> </Link>
                  <Link style={{ textDecoration: 'none' }} to="/leveltwo" path><input type="submit" value="hard" className="play-button" /> </Link>
                </div>
              </form>
            </div>
          </div>
        </div > : null}
    </>
  )
}
