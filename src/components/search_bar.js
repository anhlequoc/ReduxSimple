import React, { Component } from 'react';

class SearchBar extends Component { //nếu không import {Component} ở line 1 thì cần extends React.Component
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  // onInputChange (event) { //event describes the context or information about the event that occured, technically
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
