import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function HappyBanner({ guessList, answer, setIsDisabled }) {

  React.useEffect(() => {
    setIsDisabled(true)
  }, []);
  
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessList.length} guesses</strong>.
        Answer was {answer}
      </p>
    </div> 
  )
}

function SadBanner({ answer, setIsDisabled }) {
  
  React.useEffect(() => {
    setIsDisabled(true)
  }, []);

  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

function EndBanner({ guessList, answer, setIsDisabled }) {
  const isFinished = answer == guessList[guessList.length - 1] || guessList.length >= NUM_OF_GUESSES_ALLOWED;
  const isVictory = answer == guessList[guessList.length - 1];

  return (
    !isFinished
    ? null
    : ( isVictory
        ? <HappyBanner guessList={guessList} answer={answer} setIsDisabled={setIsDisabled} />
        : <SadBanner answer={answer} setIsDisabled={setIsDisabled} />
    ) 
  )
}

export default EndBanner;
