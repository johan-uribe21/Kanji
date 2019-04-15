import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './App.css';
var fetch = require("node-fetch");


class App extends Component {
  constructor(){
    super();
    this.state = {
      wordList: [],
      // default list of kanji wordList 
      defaultList : ['dog','cat','bird', 'cow', 'love', 'blue'], 
      timeElapsed: 0, // the amount of time elapsed since user started game
      correctMatches: 0, // the number of correct matches so far
      isLoaded: false,
    }

    // binds the method so that 'this' always refers to app class. Better than arrow functions.
    this.callAPI = this.callAPI.bind(this);
    this.populateInitialList = this.populateInitialList.bind(this);
    this.submitWord = this.submitWord.bind(this);
    this.updateStateWord = this.updateStateWord.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  };
  
  populateInitialList() {
    this.state.defaultList.forEach(async (item) => {
      await this.callAPI(item)
        .then((res) => {this.updateStateWord(item, res)})
        .catch(err => console.log(err))
    });

    this.setState({
      isLoaded: true,
    });
  }

  // updates state to remove cards when remove button is clicked
  onClickDelete(e) {
    // ids of the cards are set equal to the word
    const id = e.target.getAttribute('id')
    // filter out the card whose 'remove' button was clicked
    const newWordList = this.state.wordList.filter(el => {
      return el.word !== id;
    })
    this.setState({wordList: newWordList});
  }

  // takes a word, calls the callAPI method which fetches from the API, then updates state
  submitWord(word){
    return (
      this.callAPI(word)
        .then(res => {this.updateStateWord(word, res)})
        .catch(err => alert(`${word} is not on the list of commonly used kanji. Please try a different word`))
    )
  }

  // takes the word and the promise from the fetch call and updates the state.wordList
  updateStateWord(word, promise){
    this.setState({ 
      wordList: [
        ...this.state.wordList,
        {
          word: word,
          kanji: promise[0].kanji.character
        },
      ],
    })
  }

  // takes a word and uses it to make an API call, returns a promise.json();
  callAPI(word) {
    return fetch (`https://kanjialive-api.p.rapidapi.com/api/public/search/${word}` 
        ,{headers:{"X-RapidAPI-Key": "248efa6aa8msh5005b7a79ccea0ap133b74jsn6fc7e3d0b298"}})
        .then(response => response.json() ) // parses then pushes each character to array
  };

  componentDidMount(){
    // calls function to populate the wordlist with the default words
    this.populateInitialList();
  }

  render() {
    return (
        <div className="tc">
          <h1 className='f1'>Kanji Match</h1>
          <SearchBox submitWord = {this.submitWord} />
          <CardList 
            wordList = {this.state.wordList} 
            onClickDelete = {this.onClickDelete} 
            isLoaded={this.state.isLoaded} 
          />
        </div>
      );
  }
};

export default App;
