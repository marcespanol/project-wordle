import React from 'react';

function GuessTracker({guessList}) {
  return (
    <div className="guess-results">
        {guessList.map((word, i) => {
          return <p key={i}>{word}</p>
        })}
    </div>
  );
}

export default GuessTracker;
