import React from 'react';

// takes the props 'key', 'word', and 'kanji', where key is just the i for each card.
const Card = ({key, word, kanji}) => {
  return (
    <div classname = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <h1>{kanji + ' ' + word}</h1>
    </div>
  );
};
// Now I need to add the fetch all to app.js
export default Card