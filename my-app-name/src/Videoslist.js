import React, { Component } from 'react';
import Video from './Video';
class Videoslist extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info: [
        {name:'Ali Imran Khan', src: 'http://via.placeholder.com/350x150'},
        {name:'Kamran Aslam', src: 'http://via.placeholder.com/350x150'}
      ]
    }
  }

  render() {
    return (
      <Video details={this.state.info} />
    )
  } 
}

export default Videoslist;
