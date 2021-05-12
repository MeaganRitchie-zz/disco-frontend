import './App.css';
import { useState, useEffect } from "react"
import SigninModal from './components/SigninModal'
import Game2 from './components/Game2'
import { Route } from 'react-router-dom'
import CardContainer from './components/CardContainer'

function App() {

  const [show, setShow] = useState(true)

  const closeModal = () => setShow(false)

  const login = (username) => {
    fetch('http://localhost:9393/login/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username
      })
    }
    )
  }

  return (
    <div className="App">
      <Route exact path='/'>
        <SigninModal login={login} onClick={closeModal} setShow={setShow} show={show} />
      </Route>
      <Route path='/leveltwo'>
        <Game2 />
      </Route>
    </div>
  );
}
export default App;
