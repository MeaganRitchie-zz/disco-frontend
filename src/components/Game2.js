import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'

export default function Game2(props) {

  const [cards, setCards] = useState([])
  const [numberOfMatches, setNumberOfMatches] = useState([])
  const [currentLetter, setCurrentLetter] = useState([])
  const [clickedLetters, setClickedLetters] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/cards')
      .then(response => response.json())
      .then(apiCards => setCards(apiCards))
  }, [])

  useEffect(() => {
    const matches = clickedLetters.filter(clickedLetter => {
      return clickedLetter === currentLetter
    })
    if (matches.length === 2) {
      setNumberOfMatches(numberOfMatches + 1)
      setClickedLetters([])
    } else if (clickedLetters.length === 2) {
      setClickedLetters([])
    }
  }, [clickedLetters])

  useEffect(() => {
    if (cards.length > 0 && numberOfMatches === cards.length) {
      setTimeout(() => alert('You Win'), 200)
    }
  }, [numberOfMatches])

  const addClickedLetter = (letter) => {
    setClickedLetters([...clickedLetters, letter])
    setCurrentLetter(letter)
  }

  const makeLetterCards = () => {
    return cards.map(card => {
      return <CardContainer
        key={card.letter + card.id}
        letter={card.letter}
        clickedLetters={clickedLetters}
        addClickedLetter={addClickedLetter}
      />
    })
  }
  const makeImageCards = () => {
    return cards.map(card => {
      return <CardContainer
        key={card.url + card.id}
        url={card.url}
        character={card.letter}
        clickedLetters={clickedLetters}
        addClickedLetter={addClickedLetter}
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
