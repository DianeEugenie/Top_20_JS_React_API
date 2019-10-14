import React from 'react';

const MusicDetail = (props) => {

  if (!props.song) {
    return (
      <div className='main-music'>
        <p>Please select your tune!</p>
      </div>
    );
  }


  return (
    <div className='main-music'>

      <div className='music-detail'>

        <div className='song-album'>
          <img src={props.song['im:image'][2].label} alt={props.song['im:name']} />
        </div>

        <div className='song-details'>
          <h3>Coming in at Number {props.index + 1}</h3>
          <span>Song: {props.song['im:name'].label}</span>
          <span>Artist: {props.song['im:artist'].label}</span>
          <span>Price: {props.song['im:price'].label}</span>
          <span>Category: {props.song.category.attributes.term}</span>
          <span><a href={props.song.id.label} target="_blank" rel="noopener noreferrer">Check out the song on Apple Music!</a></span>

        </div>
      </div>

      <audio controls>
        <source src={props.song.link[1].attributes.href} type={props.song.link[1].attributes.type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );


}

export default MusicDetail;
