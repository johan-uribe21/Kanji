import React from 'react';

class SearchBox extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // updates the input field as the user types into input
  handleChange = (event) => {
    this.setState({input: event.target.value});
    // if (event.key === "Enter") {
    //   let input = document.getElementById('inputKanji').value
    //   let newWordList = this.state.wordList;
    //   newWordList.push(input);
    //   this.setState( {wordList: newWordList} );
    //   document.getElementById('inputKanji').value = '';
    //   // calls fetchKanji every time new kanji is submitted to update set and trigger a rerender with new card.
    //   this.fetchKanji();
    //   }
  };

  handleSubmit(event) {
    event.preventDefault();
    // pass the state.input
    this.props.callAPI(this.state.input)
  };

  render() {
    return (
      <form 
        className = 'pa3 ba b--green bg-lightest-blue'
        onSubmit = {this.handleSubmit} >
        <label>Addition Vocabulary Words
          <input 
            id="inputKanji" 
            ype="text" 
            size="20"
            onChange={this.handleChange}
            />
        </label>
        <input 
          type="submit" 
          value='submit'
          />
      </form>
    );
  }
}

export default SearchBox;