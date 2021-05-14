import { useState, useEffect } from "react"
import CardFront from "./CardFront"


export default function CardContainer(props) {

  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    checkForMatch()
  }, [props.clickedLetters])

  const checkForMatch = () => {
    const matches = props.clickedLetters.filter(clickedLetter => {
      return clickedLetter === (props.letter || props.character)
    })
    if (props.clickedLetters.length === 2 && matches.length === 1) {
      setTimeout(() => setIsClicked(false), 800)
    }
  }

  const handleClick = (_) => {
    if (!isClicked) {
      props.addClickedLetter(props.letter || props.character)
      setIsClicked(true)
    }
  }

  return (
    <div>
      <CardFront isClicked={isClicked}
        letter={props.letter}
        url={props.url}
        handleMatch={handleClick}
      >
      </CardFront>
    </div>
  )
}

