import React, { Component } from 'react';
import './App.css';
import Header from './Header';


class App extends Component {
  render() {
    return (
        <div className="my-wrapper">
        <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 col-md-8"> Main Area </div>
              <div className="col-4 col-md-4"> Suggestion </div>
            </div>
          </div>

             
              
             
         



        </div>
    )
  }
}

export default App;
