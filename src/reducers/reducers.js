import {
  CHANGE_DEFAULT_LIST,
  REQUEST_KANJI_PENDING,
  REQUEST_KANJI_SUCCESS,
  REQUEST_KANJI_FAILED,
  UPDATE_LIST
} from '../constants.js'

const initialStateDefaultList = {
  defaultList : ['dog','cat','bird', 'cow', 'love', 'blue'], 
}

const initialStateKanji = {
  isPending: false,
  wordList: [],
  error: ''
}

export const DefaultList = (state=initialStateDefaultList, action={}) => {
  switch(action.type){
    case CHANGE_DEFAULT_LIST:
      return {...state, defaultList: action.payload};
    default:
      return state;
  }
};

export const kanjiReducer = (state=initialStateKanji, action={}) => {
  switch(action.type){
    case REQUEST_KANJI_PENDING:
      return {...state, isPending: true};
    case REQUEST_KANJI_SUCCESS:
      return {
        ...state, 
        wordList: [...state.wordList, action.payload], 
        isPending: false
      };
    case REQUEST_KANJI_FAILED:
      return {...state, error: action.payload, isPending: false};
    case UPDATE_LIST:
      return {...state, wordList: action.payload};
    default:
      return state;
  }
};