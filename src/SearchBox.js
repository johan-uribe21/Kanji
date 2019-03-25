import React from 'react';

const SearchBox = ( {click}) => {
  return (
    <div className = 'pa3 ba b--green bg-lightest-blue'>
      {'Enter Additional Kanji:'}
      <br/>
      <input id="inputKanji" type="text" size="20"/>
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