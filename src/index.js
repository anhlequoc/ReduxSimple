import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyC5wV86_nViTypSHO6DrRu0JmHzCfc96-s";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('hello');
  }

  videoSearch (term) {
    //chuyển yt search function vào trong constructor để khi khởi chạy app luôn hiện ra 1 video list, không bị trống
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //cách viết khác dài hơn: this.setState({videos: videos}) nhung cach ES6 pho bien hon
    })
  }

  render () {
    const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
