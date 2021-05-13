import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import LevelOneCards from './LevelOneCards'

export default function Game1(props) {

  const [cards, setCards] = useState([])


  useEffect(() => {
    fetch('http://localhost:9393/cards')
      .then(response => response.json())
      .then(apiCards => setCards(apiCards))
  }, [])

  const makeLetterCards = () => {
    return cards.map(card => {
      return <LevelOneCards
        letter={card.letter}
        cardName={card.letter}
      />
    })
  }

  const makeImageCards = () => {
    return cards.map(card => {
      return <LevelOneCards
        url={card.url}
        cardName={card.letter}
      />
    })
  }


  return (
    <div>
      <NavBar />
      <div className="welcome-message"> Hi, {props.username}!</div>
      <div className="game-board">
        {makeLetterCards()}
        {makeImageCards()}
      </div>
    </div>
  )
}