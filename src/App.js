import './App.css';
import React, { useState } from "react"
import CardContainer from "./components/CardContainer"
import NavBar from "./components/NavBar"
import SigninModal from './components/SigninModal';

function App() {

  const [show, setShow] = useState(true)

  const showModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className="App">
      <SigninModal onClick={closeModal} show={show} />
      <NavBar />
      <CardContainer />
    </div>
  );
}

export default App;
