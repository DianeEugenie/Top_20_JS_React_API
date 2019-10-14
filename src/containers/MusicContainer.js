import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
// import MusicDetail from '../components/MusicDetail';

class MusicContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error(err));
  }

  render(){
    return (
      <div className="music-container">
      <h2>Hello</h2>
      </div>
    );
  }




}

export default MusicContainer;
