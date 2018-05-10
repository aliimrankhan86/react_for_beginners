import React, { Component } from 'react';

class Suggested extends Component {

  render() {
    return (
      <div>
        {
          this.props.info.map((item, i) => { 
            return <div>
              <p key={i}>{item.link}</p>
            </div>  
          })
        }
       </div>  
    )
  }
}


export default Suggested;
