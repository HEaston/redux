// library
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// own components
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBCVV-Fr5Jj4_p8I0cDMui6OYFXYYHSgpk';

class App extends Component {
  // constructor, videoSearch, render are methods on the App

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('gumball');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // throttling using lodash to stagger the search
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//passing prop videos to VideoList

// Take this component's generated HTML and put it
// on the page (in the DOM)
// ReactDOM.render(App);
// you need to make an instance before passing
// so you wrap App in JSX tags to make an instance of the component

ReactDOM.render(<App />, document.querySelector('.container'));
