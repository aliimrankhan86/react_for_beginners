import React, { Component } from 'react';
import './mainvideo.css';

class Mainvideo extends Component {
  render() {
    return (
       <div className="mainvideo">
         <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
          allowFullScreen="true"></iframe>
       </div>  
    )
  }
}

export default Mainvideo;
