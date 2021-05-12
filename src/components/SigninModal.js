import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function SigninModal(props) {

  const [username, setUsername] = useState('')

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(username)
    props.onClick()
  }

  return (
    <>
      {props.show ?
        <div className="modal">
          <h4>DISCO!</h4>
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input className="name-input" type="text" name="username" value={username} onChange={handleChange} />
                <div className="modal-footer">
                  <Link to="/leveltwo" path><input placeholder="NAME" type="submit" value="play" className="play-button" /> </Link>
                </div>
              </form>
            </div>
          </div>
        </div > : null}
    </>
  )
}
