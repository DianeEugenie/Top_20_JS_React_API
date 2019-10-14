import React from 'react';

const MusicSelector = (props) => {

  function handleClick(event){
    props.onSongSelected(event.target.value);
  }

  if(props.songs.length === 0){
    return "Loading the songs..."
  }

  const songs = props.songs.map((song, index) => {

    return <li value={index} key={index} onClick={handleClick}>On Number {index + 1}: {song.title.label}</li>

  });

  return (
    <ul id="music-selector">
      {songs}
    </ul>
  );
}

export default MusicSelector;
