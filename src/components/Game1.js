import '../Game1.css'
import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import LevelOneCards from './LevelOneCards'
import EndGame from './EndGame'
import { Link } from 'react-router-dom'

export default function Game1(props) {

  const [cards, setCards] = useState([])
  const [numberOfMatches, setNumberOfMatches] = useState([])
  const [currentLetter, setCurrentLetter] = useState([])
  const [clickedLetters, setClickedLetters] = useState([])
  const [endGame, setEndGame] = useState(false)

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
    if (cards.length > 0 && numberOfMatches.length === cards.length) {
      setEndGame(true)
    }
  }, [numberOfMatches])

  const addClickedLetter = (letter) => {
    setClickedLetters([...clickedLetters, letter])
    setCurrentLetter(letter)
  }

  const makeLetterCards = () => {
    return cards.map(card => {
      return <LevelOneCards
        key={card.letter + card.id}
        letter={card.letter}
        clickedLetters={clickedLetters}
        addClickedLetter={addClickedLetter}
      />
    })
  }

  const makeImageCards = () => {
    return cards.map(card => {
      return <LevelOneCards
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
      <div className="too-easy-container">
        <p className="too-easy">Too easy?</p><br></br>
        <Link style={{ textDecoration: 'none' }} to="/leveltwo"><button className="go-to-level-2"> Try Level 2!</button> </Link>
      </div>
      <div className="game-board">
        {makeLetterCards()}
        {makeImageCards()}
        <EndGame endGame={endGame} setEndGame={setEndGame} />
      </div>
    </div >
  )
}