import React, { Component } from 'react';
import './suggestions.css';
import Suggested from './Suggested';

class Suggestions extends Component {
  constructor() {
    super()
    this.state = {
      videos : [
        {name: 'Shakira - Waka Waka', link:'www.youtube.com/watch?v=pRpeEdMmmQ0', id:1},
        {name: 'Korn - System', link:'www.youtube.com/watch?v=pRpeEdMmmQ0', id:2},
        {name: 'Lestat concert', link:'www.youtube.com/watch?v=KyIW8CcfQrw', id:3},
        {name: 'Lestat Violin', link:'www.youtube.com/watch?v=hgg_JM9BDCE', id:4},
        {name: 'Korn - Slept so long', link:'www.youtube.com/watch?v=EH-SWKNAWN0', id:5}
      ]
    }
  }
  render() {
    return (
      <div>
        <Suggested info={this.state.videos}/>
      </div>
    )
  }
}

export default Suggestions;
