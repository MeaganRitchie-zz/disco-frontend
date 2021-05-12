import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

export default function Game2() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/cards')
      .then(response => response.json())
      .then(apiCards => setCards(apiCards))
  }, [])

  const makeLetterCards = () => {
    return cards.map(card => {
      return <CardContainer
        letter={card.letter}
      />
    })
  }
  const makeImageCards = () => {
    return cards.map(card => {
      return <CardContainer
        url={card.url}
      />
    })
  }



  return (
    <div>
      <NavBar />
      <div className="game-board">
        {makeLetterCards()}
        {makeImageCards()}
      </div>
    </div>
  )
}
