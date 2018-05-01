import React, { Component } from 'react';
import './App.css';
import Videolist from './Videoslist';

class App extends Component {
  render() {
    return (
        <div className="Video-Container">
          <h1>Hello World</h1>
          <Videolist />
        </div>
    )
  }
}

export default App;
