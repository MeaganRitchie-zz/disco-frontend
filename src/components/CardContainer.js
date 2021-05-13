import { useState, useEffect } from "react"
import CardFront from "./CardFront"
import CardBack from "./CardBack"
import ReactCardFlip from "react-card-flip"

export default function CardContainer(props) {

  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    checkForMatch()
  }, [props.clickedLetters])

  const checkForMatch = () => {
    const matches = props.clickedLetters.filter(clickedLetter => {
      return clickedLetter === (props.letter || props.character)
    })
    if (props.clickedLetters.length === 2 && matches.length === 1) {
      setTimeout(() => setIsFlipped(false), 800)
    }
  }

  const handleClick = (_) => {
    if (!isFlipped) {
      props.addClickedLetter(props.letter || props.character)
      setIsFlipped(true)
    }
  }


  return (
    <div className="card-flip">
      <div className="card-flip-inner">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <CardBack handleClick={handleClick} >
          </CardBack>
          <CardFront
            letter={props.letter}
            url={props.url}
            handleClick={handleClick}>
          </CardFront>
        </ReactCardFlip>
      </div>
    </div>
  )
}
