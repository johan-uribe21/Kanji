import React from 'react';

// takes the props 'key', 'word', and 'kanji', where key is just the i for each card.
const Kanji = ({word, kanji}) => {
  return (
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <div>
        <h2 className = 'f1'>{kanji}</h2>
        <p> {word}</p>
      </div>
    </div>
  );
};

export default Kanji;
