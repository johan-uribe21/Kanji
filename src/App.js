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
      wordList: [], // list of kanji wordList used for matching game
      kanjiList: [],
      inputField: '', // the user input used to populate the 'wordList' array
      timeElapsed: 0, // the amount of time elapsed since user started game
      correctMatches: 0, // the number of correct matches so far
    }
  };

  // use an arrow function to add an onInputChange function that updates inputField 
  // to event.target.value
  // Will have to render a list of all currently used wordList on screen and allow user to change.
  onInputChange = (event) => {
    //changes state so that the inputField gets updated as you type.
    this.setState({ inputField: event.target.value }); 
  }

componentDidMount(){
    // fetch kanji, parse the json, then update the state with hew word-kanji pairs
    const defaultWords = ['dog','cat','bird', 'cow'];
    this.setState({wordList: defaultWords});
    const fetchedKanji = [];
    
    // this promise.all is not working properly
    Promise.all( // waits until all promises are completed
      defaultWords.map(word => { // creates new array three promises for each word in wordList
        return fetch (`https://kanjialive-api.p.rapidapi.com/api/public/search/${word}` 
          ,{headers:{"X-RapidAPI-Key": "248efa6aa8msh5005b7a79ccea0ap133b74jsn6fc7e3d0b298"}})
          .then(response => response.json() ) // parses then pushes each character to array
          .then(myJSON => fetchedKanji.push(myJSON[0].kanji.character ))
      })
    )
    .then( () => this.setState({kanjiList: fetchedKanji})) // updates state with fetchedKanji
    .catch(error => console.log(error))
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
          <h1 className='f2'>Kanji Match</h1>
          <SearchBox searchChange = {this.onInputChange}/>
          <CardList wordList = {wordList} kanjiList = {kanjiList}/>
        </div>
      );
  }
}

export default App;
