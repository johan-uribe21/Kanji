import React from 'react';
import Kanji from './Kanji.js';

// Need to use the fetch call in app.js to update wordList with the characters. 
// wordList and kanjiList are both arrays.
// Make them an array filled with objects eventually.
const CardList = ({wordList, onClickDelete, isLoaded}) => {
  const list = wordList || []

  return (
    <div>
      {
        list.length > 0 ? wordList.map((char, idx) => {
            return <Kanji key={idx} word={char.word} kanji={char.kanji} onClickDelete={onClickDelete}/>
        }) : (<span>I got nothing</span>)
      }
    </div>
  );
};

export default CardList

// {
      //   wordList.map( (word, i) => {
      //     return (
      //       <Kanji // passes these vales to Kanji component to build
      //         id = {i}
      //         key = {i} // can not pass key as a prop because it is a react specific keyword
      //         word = {word[i].word}
      //         kanji = {word[i].kanji}
      //         onClick = {onClickDelete}
      //       />
      //     );
      //   })
      // }