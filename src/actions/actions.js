import {
  CHANGE_DEFAULT_LIST,
  REQUEST_KANJI_PENDING,
  REQUEST_KANJI_SUCCESS,
  REQUEST_KANJI_FAILED,
  UPDATE_LIST
} from '../constants.js'
var fetch = require("node-fetch");


// ============ set the default list to state, so it can populate ============
export const setDefaultList = (text) => {
  return {
    type: CHANGE_DEFAULT_LIST,
    payload: text
  }
};


// ============= update wordList array with word object removed  ===============
export const updateList = (list) => {
  return {
    type: UPDATE_LIST,
    payload: list
  }
}

// ============= API Call Actions ==================

//need to figure out a way to give the user a message if they input an uncommon word
// takes a word and uses it to make an API call, returns a promise.json();
const callAPI = (word) => {
  return fetch (`https://kanjialive-api.p.rapidapi.com/api/public/search/${word}` 
      ,{headers:{"X-RapidAPI-Key": "248efa6aa8msh5005b7a79ccea0ap133b74jsn6fc7e3d0b298"}})
      .then(response => response.json() ) // parses then pushes each character to array
};

// returns a function which triggers redux-thunk, which gives it to dispatch
export const requestKanji = (word) => (dispatch) => {
  dispatch({type: REQUEST_KANJI_PENDING});
  callAPI(word)
    .then(res => dispatch(
      {type:REQUEST_KANJI_SUCCESS, payload: {word: word, kanji: res[0].kanji.character}}
    ))
    .catch(error => {
      alert(`${word} is not in the list of commonly used kanji. Try a different word`)
      dispatch({type: REQUEST_KANJI_FAILED, payload: error})
    })
};