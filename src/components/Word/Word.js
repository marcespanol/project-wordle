import React from 'react';

import { range } from '../../utils'

function Word({ value }) {
  return (
    <p className="guess">
      {/* {value.split('').map((letter) => {
        return <span className="cell">{letter}</span>
      })} */}
      {range(5).map((num) => {
        return (
          <span key={num} className="cell">
            {value ? value[num] : undefined}
          </span>
        )
      })}
    </p>
  )
}

export default Word;
