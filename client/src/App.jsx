import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Flashcard from './components/Flashcard'

function App() {
  const [count, setCount] = useState(0);
  const [flashcards, setFlashcards] = useState([['what is red', 'a color'], ['what is apple?', 'a fruit']]);

  const [signal,setSignal] = useState(false);

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  // const [flipSignal]
  const handleDecrement = () => {
    if (flashcardIndex != 0) {
      setFlashcardIndex(prev => prev - 1);
      setSignal(!signal);
    }
  }
  
  const handleIncrement = () => {
    if (flashcardIndex < flashcards.length - 1) {
      setFlashcardIndex(prev => prev + 1);
      setSignal(!signal);
    }
  }
  return (
    <>
      <div>
        <h1>Flashcards</h1>
        <Flashcard text1={flashcards[flashcardIndex][0]} text2={flashcards[flashcardIndex][1]} resetSignal={signal}/>
        
        <h4>Flashcard Index: {flashcardIndex}</h4>
        <div className='flashcard-btns'>
          <button onClick={handleDecrement}>&lt;</button>
          <button onClick={handleIncrement}>&gt;</button>

        </div>
      </div>
    </>
  )
}

export default App
