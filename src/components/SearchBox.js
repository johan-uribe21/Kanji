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

  // updates the input field as the user types into input, and turns form into a controlled component.
  handleChange = (event) => {
    this.setState({input: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitWord(this.state.input);
    this.setState({input: ''}); // resets the state.input value which resets the rendered value in input box
  };

  render() {
    return (
      <form 
        className = 'pa3 ba b--green bg-lightest-blue'
        onSubmit = {this.handleSubmit} >
        <label>Additional Vocabulary Words: 
          <input 
            id="inputKanji" 
            type="text" 
            size="20"
            onChange={this.handleChange}
            value = {this.state.input} // for controlled component, state controls values
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