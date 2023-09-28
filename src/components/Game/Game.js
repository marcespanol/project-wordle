import React from 'react';
import GuessInput from '../GuessInput';
import GuessTracker from '../GuessTracker';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [trialWord, setTrialWord] = React.useState('');
  const [guessList, setGuessList] = React.useState([])

  return (
    <>
      <GuessTracker guessList={guessList}/>
      <GuessInput trialWord={trialWord} setTrialWord={setTrialWord} guessList={guessList} />
    </>
    
  )
}

export default Game;
