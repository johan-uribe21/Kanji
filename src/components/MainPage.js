import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './MainPage.css';




class MainPage extends Component {
  constructor(){
    super();
    this.state = {}
    // binds the method so that 'this' always refers to app class. Better than arrow functions.
    this.populateInitialList = this.populateInitialList.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  };
  

  // this call is no longer asynchronos because that has been moved into the 
  // actions, and is now hanlded by reduce and redux-thunk.
  populateInitialList() {
    this.props.defaultList.forEach((item) => {
      this.props.onRequestKanji(item)
    });
  }

  // updates state to remove cards when remove button is clicked
  onClickDelete(e) {
    // ids of the cards are set equal to the word
    const id = e.target.getAttribute('id')
    // filter out the card whose 'remove' button was clicked
    const newWordList = this.props.wordList.filter(elem => {
      return elem.word !== id;
    })
    this.props.onUpdateList(newWordList);
  }

  componentDidMount(){
    // calls function to populate the wordlist with the default words
    this.populateInitialList();
  }

  render() {
    const {wordList, onRequestKanji} = this.props;
    return (
        <div className="tc">
          <h1 className='f1'>Kanji Match</h1>
          <SearchBox submitWord = {onRequestKanji} />
          <CardList 
            wordList = {wordList} 
            onClickDelete = {this.onClickDelete} 
            isLoaded={this.state.isLoaded} 
          />
        </div>
      );
  }
};

export default MainPage;
