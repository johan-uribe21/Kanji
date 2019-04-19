import React from 'react';
import Kanji from './Kanji.js';

const CardList = ({wordList, onClickDelete, isLoaded}) => {
  const list = wordList || []

  return (
    <div>
      {
        list.length > 0 ? // ternary operator
        wordList.map((char, idx) => {
            return <Kanji 
              key={idx} 
              word={char.word} 
              kanji={char.kanji} 
              onClickDelete={onClickDelete}/>
        }) : 
        (<span>I got nothing</span>)
      }
    </div>
  );
};

export default CardList
