import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import YTSearch from 'youtube-api-search';

const api_key = "AIzaSyDTCZ13W6qgWAGrB5X2T6MTw_qX1BG-w7I";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedVideo: null,
      videos:[]
    };

    this.videoSearch('fails');
  }

  videoSearch(term){
    YTSearch({key:api_key,term:term}, (data) => {
      console.log(data);
      this.setState({
        selectedVideo:data[0],
        videos: data
      })
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
