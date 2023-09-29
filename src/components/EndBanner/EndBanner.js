import React from 'react';

function HappyBanner({ guessList, answer, setIsDisabled }) {
  setIsDisabled(true)
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessList.length} guesses</strong>.
        Answer was {answer}
      </p>
    </div> 
  )
}

function SadBanner({ answer, setIsDisabled }) {
  setIsDisabled(true)
  return (
    <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )
}

function EndBanner({ guessList, answer, setIsDisabled }) {
  const isFinished = answer == guessList[guessList.length - 1] || guessList.length >= 6;
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
