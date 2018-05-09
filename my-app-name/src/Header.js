import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';


class Header extends Component {
  constructor(prop) {
    super()
    this.state = {
      list : [
        {text: 'Home', id:1, link: '#'},
        {text: 'About Us', id:2, link: '#'},
        {text: 'News', id:3, link: '#'},
        {text: 'Contact', id:4, link: '#'},
      ]
    }
  }
  render() {
    return (
        <header className="">
          <Nav link={this.state.list} />
        </header>
    )
  }
}

export default Header;
