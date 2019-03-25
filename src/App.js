import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './App.css';

var fetch = require("node-fetch");

// first version of game will just be a set of flashcards used to study.
// add support for hiragana in next version

class App extends Component {
  constructor(){
    super();
    this.state = {
      wordList: ['dog','cat','bird', 'cow'], // default list of kanji wordList 
      kanjiList: [], // array of objects containing word and kanji pairs
      inputField: [], // the user input used to populate the 'wordList' array
      timeElapsed: 0, // the amount of time elapsed since user started game
      correctMatches: 0, // the number of correct matches so far
    }
  };

  // use arrow function in order to access this.setState
  onClick = (event) => {
    // need to prevent default so that the page does not reload, which is the default behavior.
    let input = document.getElementById('inputKanji').value
    let newWordList = this.state.wordList;
    newWordList.push(input);
    this.setState( {wordList: newWordList} );
    document.getElementById('inputKanji').value = '';
    this.fetchKanji();
  }

  fetchKanji = () => {
    const fetchedKanji = [];
  // fetch kanji, parse the json, then update the state with hew word-kanji pairs
        // loops over default words, creates promise for each, parses jason, then stores in array
      Promise.all( // waits until all promises are completed
      this.state.wordList.map((word, i) => { // creates new array three promises for each word in wordList
        return fetch (`https://kanjialive-api.p.rapidapi.com/api/public/search/${word}` 
        ,{headers:{"X-RapidAPI-Key": "248efa6aa8msh5005b7a79ccea0ap133b74jsn6fc7e3d0b298"}})
        .then(response => response.json() ) // parses then pushes each character to array
        .then(myJSON => {
          fetchedKanji.push( {word: this.state.wordList[i] ,kanji: myJSON[0].kanji.character} )
          })
      })
      )
      .then( () => this.setState({kanjiList: fetchedKanji})) // updates state with fetchedKanji
      .catch(error => console.log(error))
  };

  componentDidMount(){
    this.fetchKanji();  
  }

  render() {
  
    const {wordList,kanjiList} = this.state;
    // somewhere I must give user an option to remove wordList from wordList
    
    // a const here that pushes new inputs from onInputChange to wordList, and removes others.
    // not sure how or where to do this.

    return !wordList.length ?
      <h1>Loading</h1>:
      (
        <div className="tc">
          <h1 className='f1'>Kanji Match</h1>
          <SearchBox click = {this.onClick}/>
          <CardList kanjiList = {kanjiList}/>
        </div>
      );
  }
};

export default App;
