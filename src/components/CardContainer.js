import { useState } from "react"
import CardFront from "./CardFront"
import CardBack from "./CardBack"
import ReactCardFlip from "react-card-flip"

export default function CardContainer(props) {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (event) => setIsFlipped(!isFlipped)

  return (
    <div className="card-flip">
      <div className="card-flip-inner">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <CardBack handleClick={handleClick} >
          </CardBack>
          <CardFront card={props.card} handleClick={handleClick} >
          </CardFront>
        </ReactCardFlip>
      </div>
    </div>
  )
}
