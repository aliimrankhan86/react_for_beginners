import React, { Component } from 'react';
class Video extends React.Component {
  render() {
    return (
      <div>
        { 
          this.props.details.map((item,index) => {
            return <div className="video">
              <p>{item.name}</p>
              <img src={item.src} /> 
            </div>
          })
        }
      </div>  
    )
  }
}

export default Video;
