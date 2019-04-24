import React, { Component } from 'react';
import {connect} from 'react-redux';
import MainPage from '../components/MainPage.js';
import './App.css';
import {requestKanji, updateList} from '../actions/actions.js';
 

const mapStateToProps = state => {
  return {
    defaultList: state.DefaultList.defaultList,
    wordList: state.kanjiReducer.wordList
  }
}

// the dispatch is what sends the actions object to the reducer
// we get dispatch from redux
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestKanji: (word) => dispatch(requestKanji(word)), //redux-thunks comes in here.
    onUpdateList: (list) => dispatch(updateList(list))
  };
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      // default list of kanji wordList 
      timeElapsed: 0, // the amount of time elapsed since user started game
      correctMatches: 0, // the number of correct matches so far
      isLoaded: false,
    }

    
  };
  

  // this call is no longer asynchronos because that has been moved into the 
  // actions, and is now hanlded by reduce and redux-thunk.
 


 
  render() {
    return (
        <MainPage />
      )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
