import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyC5wV86_nViTypSHO6DrRu0JmHzCfc96-s";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: []
    }

    //chuyển yt search function vào trong constructor để khi khởi chạy app luôn hiện ra 1 video list, không bị trống
    YTSearch({key: API_KEY, term: 'hello'}, (videos) => {
      this.setState({ videos }); //cách viết khác dài hơn: this.setState({videos: videos})
    })
  }
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
