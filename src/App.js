import './App.css';
import { useState } from "react"
import SigninModal from './components/SigninModal'
import Game2 from './components/Game2'
import Game1 from './components/Game1'
import { Route } from 'react-router-dom'
import Help from './components/Help'

function App() {
  const closeModal = () => setShow(false)

  const [show, setShow] = useState(true)
  const [username, setUsername] = useState('')


  const handleChange = (event) => {
    setUsername(event.target.value)
  }

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
      .then(response => response.json())
      .then(response => {
        setUsername(response)
      }
      )
  }

  return (
    <div className="App">
      <Route exact path='/'>
        <SigninModal handleChange={handleChange}
          username={username}
          login={login}
          onClick={closeModal}
          setShow={setShow}
          show={show} />
      </Route>
      <Route path='/leveltwo'>
        <Game2 username={username} />
      </Route>
      <Route path='/help'>
        <Help />
      </Route>
      <Route path='/levelone'>
        <Game1 />
      </Route>
    </div>
  );
}
export default App;
