import React from 'react';

const MusicDetail = (props) => {

  if (!props.song) {
    return (
      <p>Select your tune!</p>
    );
  }

  return (
    <div className='music-detail'>
      <div className='song-album'>
      <img src={props.song['im:image'][2].label} alt={props.song['im:name']} />
      <p><a href={props.song.link[1].attributes.href}>Give this tune a spin!</a></p>
      </div>
      <div className='song-details'>
      <h2>Coming in at Number {props.index + 1}</h2>
      <h3>The song: {props.song['im:name'].label}</h3>
      <h3>The artist: {props.song['im:artist'].label}</h3>
      </div>

    </div>
  );


}

export default MusicDetail;
