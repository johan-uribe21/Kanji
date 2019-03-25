import React from 'react';

// takes the props 'key', 'word', and 'kanji', where key is just the i for each card.
const Kanji = ({id, word, kanji, onClick}) => {
  return (
    <div className = 'tc bg-light-green dib br3 pa3 ma2 shadow-hover bw2 shadow-5'>
        <h2 className = 'f1'>{kanji}</h2>
        <p> {word}</p>
        <button 
          type = "button"
          id = {word}
          onClick = {onClick}
          className = 'f7 bg-light-blue br3' 
          >
          remove
        </button>
    </div>
  );
};

export default Kanji;
