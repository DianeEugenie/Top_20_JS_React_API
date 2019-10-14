import React from 'react';

const MusicSelector = (props) => {

  function handleClick(event){
    props.onSongSelected(event.target.value);
  }

  if(props.songs.length === 0){
    return "Loading the songs..."
  }

  const songs = props.songs.map((song, index) => {

    return <li value={index} key={index} onClick={handleClick}>{index + 1}: {song.title.label}</li>

  });

  return (
    <ul className="music-selector">
      {songs}
    </ul>
  );
}

export default MusicSelector;
