import React, { Component } from 'react';

class SearchBar extends Component { //nếu không import {Component} ở line 1 thì cần extends React.Component
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render () {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value})} /> //convert onInputChange to arrow function
      </div>
    )
  }

  // onInputChange (event) { //event describes the context or information about the event that occured, technically
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
