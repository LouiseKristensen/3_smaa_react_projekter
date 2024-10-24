import React from 'react';

function CharCount({ maxChars, currentLength }) {
  return (
    <p>{maxChars - currentLength} characters remaining</p>
  );
}

export default CharCount;
