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
  render() {
    return (
        <MainPage {...this.props}/>
      )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
