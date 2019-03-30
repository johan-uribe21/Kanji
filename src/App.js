import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList.js'



class App extends Component {
  constructor(){
    super();
    this.state = {
      wordList: ['dog', 'cat', 'rain', 'car'], // default list of kanji wordList used for matching game
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

  render() {
    const {wordList, inputField, timeElapsed, correctMatches} = this.state;
    // somewhere I must give user an option to remove wordList from wordList

    // a const here that pushes new inputs from onInputChange to wordList, and removes others.
    // not sure how or where to do this.

    return !wordList.length ?
      <h1>Loading</h1>:
      (
        <div className="tc">
          <h1 className='f2'>Kanji Match</h1>
          <CardList wordList = {wordList} />
        </div>
      );
  }
}

export default App;
