import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './App.css';
import CardList from './CardList.js'


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
  
  // updates state to remove cards when remove button is clicked
  onClickDelete = (e) => {
    const newWordList = [...this.state.wordList]
    const newKanjiList = [...this.state.kanjiList]
    const wordIndex = newWordList.findIndex(element => element === e.target.getAttribute('id'));
    const kanjiIndex = newKanjiList.findIndex(element => element.word === e.target.getAttribute('id'));
    newWordList.splice(wordIndex,1)
    newKanjiList.splice(kanjiIndex,1)
    this.setState({wordList: newWordList, kanjiList: newKanjiList})
  }

  // adds kanji card when users press enter with something in the textbox
  onKeyPress = (event) => {
    if (event.key === "Enter") {
      let input = document.getElementById('inputKanji').value
      let newWordList = this.state.wordList;
      newWordList.push(input);
      this.setState( {wordList: newWordList} );
      document.getElementById('inputKanji').value = '';
      // calls fetchKanji every time new kanji is submitted to update set and trigger a rerender with new card.
      this.fetchKanji();
      }
  };

  // use arrow function in order to access this.setState
  onClickAdd = (event) => {
    // need to prevent default so that the page does not reload, which is the default behavior.
    let input = document.getElementById('inputKanji').value
    let newWordList = this.state.wordList;
    newWordList.push(input);
    this.setState( {wordList: newWordList} );
    document.getElementById('inputKanji').value = '';
    // calls fetchKanji every time new kanji is submitted to update set and trigger a rerender with new card.
    this.fetchKanji();
  }

  fetchKanji = () => {
    const fetchedKanji = [];
    // loops over default words, creates promise for each, parses jason, then stores in array
    Promise.all( // waits until all promises are completed
      this.state.wordList.map((word, i) => { // creates new array three promises for each word in wordList
        return fetch (`https://kanjialive-api.p.rapidapi.com/api/public/search/${word}` 
        ,{headers:{"X-RapidAPI-Key": "248efa6aa8msh5005b7a79ccea0ap133b74jsn6fc7e3d0b298"}})
        .then(response => response.json() ) // parses then pushes each character to array
        .then(myJSON => {
          fetchedKanji.push( {word: this.state.wordList[i] ,kanji: myJSON[0].kanji.character} )
          })
          .catch(error => {
            const oldWorldList = [...this.state.wordList]
            oldWorldList.pop()
            this.setState( {wordList: oldWorldList})
            alert(`"${word}" is not included in the list of common kanji. Try another word.`)
          })
        })
    )
      .then( () => this.setState({kanjiList: fetchedKanji})) // updates state with fetchedKanji
      .catch(error => console.log(error))
  };

  componentDidMount(){
    // calls fetchKanji to do the initial set state and render for default display
    this.fetchKanji();  
  }

  render() {

    const {wordList,kanjiList} = this.state;
    // somewhere I must give user an option to remove wordList from wordList
    
    // a const here that pushes new inputs from onInputChange to wordList, and removes others.
    // not sure how or where to do this.

    return (
        <div className="tc">
          <h1 className='f1'>Kanji Match</h1>
          <SearchBox click = {this.onClickAdd} keypress = {this.onKeyPress}/>
          <CardList kanjiList = {kanjiList} onClickDelete = {this.onClickDelete}/>
        </div>
      );
  }
};

export default App;
