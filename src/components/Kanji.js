import React from 'react';
import {shallow, mount, render,configure} from 'enzyme';


const Kanji = ({word, kanji, onClickDelete}) => {
  return (
    <div className = 'tc bg-light-green dib br3 pa3 ma2 shadow-hover bw2 shadow-5'>
        <h2 className = 'f1'>{kanji}</h2>
        <p> {word}</p>
        <button 
          type = "button"
          id = {word}
          onClick = {onClickDelete}
          className = 'f7 bg-light-blue br3' 
          >
          remove
        </button>
    </div>
  );
};

export default Kanji;
