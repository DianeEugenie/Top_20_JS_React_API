import React from 'react';

const MusicDetail = (props) => {

  if (!props.song) {
    return (
      <p>Select your tune!</p>
    );
  }

  return (
    <div className='music-detail'>
      <h2>Coming in at Number {props.index + 1}</h2>
      <h3>The song: {props.song['im:name'].label}</h3>
      <h3>The artist: {props.song['im:artist'].label}</h3>
    </div>
  );


}

export default MusicDetail;
