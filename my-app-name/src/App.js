import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Searchbox from './Searchbox';
import MainVideo from './Mainvideo';
import Suggestions from './Suggestions';


class App extends Component {
  render() {
    return (
        <div className="my-wrapper">
        <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8"> 
                <Searchbox />
                <MainVideo />
              </div>
              <div className="col-md-4">
                <div className="suggestion-area">
                  <Suggestions />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
