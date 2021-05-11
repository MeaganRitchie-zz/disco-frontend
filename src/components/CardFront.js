import React from 'react'

export default function CardFront(props) {
  return (
    <div>
      <div className="card-front" onClick={props.handleClick}>
        <h1>apple</h1>
        <img alt="apple" src="http://www.clker.com/cliparts/O/v/7/l/l/g/red-apple-md.png"></img>
      </div>
      <div className="card-front" onClick={props.handleClick}>
        <h1> bus</h1>
        <img alt="bus" src="https://wikiclipart.com/wp-content/uploads/2016/10/Cute-bus-clipart.png"></img>
      </div>
      <div className="card-front" onClick={props.handleClick}>
        <h1> cat</h1>
        <img alt="cat" src="https://svgheart.com/wp-content/uploads/2020/06/cute-cat-clipart-free-svg-file.png"></img>
      </div>
      <div className="card-front" onClick={props.handleClick}>
        <h1> duck</h1>
        <img alt="duck" src="https://lh3.googleusercontent.com/proxy/gj9CstGDWs_e5Gt9SGCK9oyOYjpOcKzB05FKpF6MmppnnBvWRb86a0soee4MlCjKkiMEzyX8K_-dUcNdHKM__HOp8clKM3MnLfabtAmwqq3o.png"></img>
      </div>
    </div >
  )
}

