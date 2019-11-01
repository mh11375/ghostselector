import React, {Component} from 'react';
import Ghost from './Ghost';
import casper from './images/casper.jpeg';
import ghost1 from './images/ghost1.png'
import ghost-ads-image from './images/ghosts-ads-image.jpg';
import marshmallowghost from './images/marshmallowghost.jpeg';


class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedGhost: 'casper'
    }
  }

  selectGhost = (ghostName) => {
    this.setState({
      selectedGhost: ghostName,
    });
  };


  render () {
    return(
      <div className="container">
      <div className="navbar">
        <div> Selected: </div>
        <div> {this.state.selectedGhost} </div>
      </div>
      <div className="ghost-list">Put the Ghost compnent here
      <Ghost ghost={ghost1} selectGhost = {this.selectGhost}/>
      <Ghost ghost={casper} selectGhost = {this.selectGhost}/>
      <Ghost ghost={marshmallowghost} selectGhost = {this.selectGhost}/>
      <Ghost ghost={ghost-ads-image} selectGhost = {this.selectGhost}/>
      </div>
      </div>
    )
  }
}

export default Selector;
