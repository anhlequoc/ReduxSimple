import React, { Component } from 'react';

class SearchBar extends Component {
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
<<<<<<< HEAD
          onChange={event => this.setState({ term: event.target.value})} />
=======
          onChange={event => this.onInputChange(event.target.value)} />
>>>>>>> withComment
      </div>
    )
  }
}

export default SearchBar;
