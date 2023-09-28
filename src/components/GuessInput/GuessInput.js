import React from 'react';

function GuessInput() {
  const [trialWord, setTrialWord] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({trialWord});
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
        pattern=".{5,5}"
        value={trialWord}
        onChange={event => {
          setTrialWord(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput;
