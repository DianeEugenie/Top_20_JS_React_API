import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null,
      index: 0
    }

    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err => console.error(err));
  }

  handleSongSelected(index){
  const selectedSong = this.state.songs[index];
  this.setState({index: index});
  this.setState({selectedSong: selectedSong});
  }



  render(){
    return (
      <div className="music-container">
      <MusicSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
      <MusicDetail song={this.state.selectedSong} index={this.state.index} />
      </div>
    );
  }


}

export default MusicContainer;
