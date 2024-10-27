import React from 'react'
import { useState, useEffect, useRef } from 'react'

import "../styles/Flashcard.css"

function Flashcard({text1, text2, resetSignal}) {
  const [flip, setFlip] = useState(true);
  const handleFlip = () => {
    setFlip(false);
  }
  const handleClick = () => {
    setFlip(!flip);
  }

  useEffect(() => {
    setFlip(true);
  }, [resetSignal])

  return (
    <div className='flashcard' onClick={handleClick}>
      {flip 
      ?
          (<div>{text1}</div>)
      :
          (<div>{text2}</div>)
      }
    </div>
  )
}

export default Flashcard