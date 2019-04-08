import React from 'react';

const SearchBox = ( {click, keypress}) => {
  return (
    <div className = 'pa3 ba b--green bg-lightest-blue'>
      {'Enter Additional Kanji:'}
      <br/>
      <input 
        id="inputKanji" 
        ype="text" 
        size="20"
        onKeyPress = {keypress}
        />
      <br/>
      <button 
        type="button" 
        onClick = {click}
        >
        Submit
      </button>
    </div>
  );
}

export default SearchBox;