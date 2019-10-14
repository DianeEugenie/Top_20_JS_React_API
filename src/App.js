import React, {Component} from 'react';
import MusicContainer from './containers/MusicContainer';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='main'>
      <Header />
      <MusicContainer />
      </div>
    );
  }

}

export default App;
