import React from 'react';

function GuessInput() {
  const [trialWord, setTrialWord] = React.useState('');

  let trialWordUpper = trialWord.toUpperCase();

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.log({trialWordUpper});
        setTrialWord('');
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        value={trialWordUpper}
        onChange={event => {
          setTrialWord(event.target.value)
        }}
      />
    </form>
  )
}

export default GuessInput;
