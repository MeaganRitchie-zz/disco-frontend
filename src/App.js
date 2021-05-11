import './App.css';
import { useState, useEffect } from "react"
import CardContainer from "./components/CardContainer"
import NavBar from "./components/NavBar"
import SigninModal from './components/SigninModal';

function App() {

  const [show, setShow] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/cards')
      .then(response => response.json())
      .then(apiCards => setCards(apiCards))
  }, [])

  const makeCards = () => {
    return cards.map(card => {
      return <CardContainer
        card={card}
      />
    })
  }
  const closeModal = () => setShow(false)

  return (
    <div className="App">
      <SigninModal onClick={closeModal} show={show} />
      <NavBar />
      {makeCards()}
    </div>
  );
}

export default App;
