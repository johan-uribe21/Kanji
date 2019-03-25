import React from 'react';
import Kanji from './Kanji.js';

// Need to use the fetch call in app.js to update wordList with the characters. 
// wordList and kanjiList are both arrays.
// Make them an array filled with objects eventually.
const CardList = ({kanjiList}) => {
  return (
    <div>
      {
        kanjiList.map( (word, i) => {
          return (
            <Kanji // passes these vales to Kanji component to build
              key = {i}
              word = {kanjiList[i].word}
              kanji = {kanjiList[i].kanji}
            />
          );
        })
      }
    </div>
  );
};

export default CardList