import React from 'react';
import Card from './Card.js';

// Need to use the fetch call in app.js to update wordList with the characters. 
// wordList and kanjiList are both arrays.
// Make them an array filled with objects eventually.
const CardList = ({wordList, kanjiList}) => {
  return (
    <div>
      {
        wordList.map( (word, i) => {
          return (
            <Card // passes these vales to Card component to build
              key = {i}
              word = {wordList[i]}
              kanji = {kanjiList[i]}
            />
          );
        })
      }
    </div>
  );
};

export default CardList