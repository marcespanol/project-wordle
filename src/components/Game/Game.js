import React from 'react';
import GuessInput from '../GuessInput';
import GuessTracker from '../GuessTracker';
import EndBanner from '../EndBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([])
  const [isDisabled, setIsDisabled] = React.useState(false);

  function handleGuessList(trialWord) {
    setGuessList([...guessList, trialWord]);
  }

  return (
    <>
      <GuessTracker guessList={guessList} answer={answer}/>
      <GuessInput handleGuessList={handleGuessList} isDisabled={isDisabled} />
      <EndBanner guessList={guessList} answer={answer} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </>
  )
}

export default Game;
