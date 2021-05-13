import { useState } from "react"
import CardFront from "./CardFront"


export default function CardContainer(props) {


  return (
    <div className="card-flip">
      <CardFront flipped={props.flipped}
        changeFlip={props.changeFlip}
        cardName={props.cardName}
        letter={props.letter}
        url={props.url}
        onClick={props.onClick}
      >
      </CardFront>
    </div>
  )
}
