import React from 'react'
import CardFront from "./CardFront"
import CardBack from "./CardBack"
import ReactCardFlip from 'react-card-flip'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="card-flip">
        <div className="card-flip-inner">
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <CardBack handleClick={this.handleClick} >
            </CardBack>
            <CardFront handleClick={this.handleClick} >
            </CardFront>
          </ReactCardFlip>
        </div>
      </div>
    )
  }
}
