import React from 'react'
import '../App.css'


export default function SigninModal(props) {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <input type="text" name="name" />
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClick} className="play-button">PLAY!</button>
        </div>
      </div>
    </div >
  )
}
