import React from 'react';

function GuessTracker({guessList}) {
  return (
    <div className="guess-results">
        {guessList.map((word, i) => {
          return <p key={i} className="guess">{word}</p>
        })}
    </div>
  );
}

export default GuessTracker;
