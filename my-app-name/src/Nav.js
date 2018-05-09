import React, { Component } from 'react';
import './App.css';
import './nav.css';

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = ({itemclass: "nav-item nav-link"});
  }

    componentDidMount(){
      this.firstNavActive();
    }

    

    firstNavActive = () => {
      let firstElm = document.querySelector('.nav-item');
      // console.log(firstElm);
      firstElm.classList.add('active')
    }

    addActive = (xyz) => {
      // this.setState({itemclass: "newClass"});
      console.log(xyz);
      // if(this.state.itemclass === "nav-item nav-link") {
      //   console.log('i am new class')
      //   this.state.itemclass;
      // }
    }

    
  


  render() {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
      <a className="navbar-brand" href="#">YouTube</a>


      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {
            this.props.link.map(item => {
             return <a className={this.state.itemclass} data-item={item.id} onClick={(abc) => (this.addActive(abc))} href={item.link} id={item.id}> {item.text} </a>
            })
          }
        
        



          {/* <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Trending</a>
          <a className="nav-item nav-link" href="#">Subscriptions</a> */}
        </div>
      </div>
    </nav>
    )
  }
}

export default Nav;
