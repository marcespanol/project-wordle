import React from 'react';

function GuessInput({handleGuessList}) {
  const [trialWord, setTrialWord] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    handleGuessList(trialWord);

    setTrialWord('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={trialWord}
        onChange={event => {
          setTrialWord(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput;
