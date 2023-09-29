import React from 'react';

import Word from '../Word'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function GuessTracker({guessList}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <Word key={num} value={guessList[num]} />
        )
      })}
    </div>
  );
}

export default GuessTracker;
