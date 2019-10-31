import React, {Component} from 'react';

class Selector extends Component {
  render () {
    return(
      <div className="container">
      <div className="navbar">
        <div> Selected: </div>
        <div> What goes here? </div>
      </div>
      <div className="ghost-list">Put the Ghost compnent here</div>
      </div>
    )
  }
}

export default Selector;
