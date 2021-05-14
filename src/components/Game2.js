import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CardContainer from './CardContainer'
import EndGame from './EndGame'

export default function Game2(props) {

  const [cards, setCards] = useState([])
  const [numberOfMatches, setNumberOfMatches] = useState([])
  const [currentLetter, setCurrentLetter] = useState([])
  const [clickedLetters, setClickedLetters] = useState([])
  const [endGame, setEndGame] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9393/cards')
      .then(response => response.json())
      .then(apiCards => {
        setCards(shuffleCards(apiCards))
      })
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
    if (cards.length > 0 && numberOfMatches.length === cards.length) {
      setEndGame(true)
    }
  }, [numberOfMatches])

  const addClickedLetter = (letter) => {
    setClickedLetters([...clickedLetters, letter])
    setCurrentLetter(letter)
  }

  const shuffleCards = (notMixedCards) => {
    let mixedCards = []
    while (notMixedCards.length > 0) {
      let i = Math.floor(Math.random() * (notMixedCards.length))
      mixedCards.push(notMixedCards.splice(i, 1)[0])
    }
    return mixedCards
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
      <h2 className="highscore-title"></h2>
      <p className="highscore-number"></p>
      <div className="game-board">
        {makeLetterCards()}
        {makeImageCards()}
      </div>
      <EndGame endGame={endGame} setEndGame={setEndGame} />
    </div >
  )
}
