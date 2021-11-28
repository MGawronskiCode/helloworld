import React, {Component} from 'react';

import './../App.css';

class Greetings extends Component {
  
  constructor(props) {
    super(props);

    this.title = "Title from coponent";

  }
  
  render() {
    return (
      <div>
        <h3>Greetings!</h3>
        <p>From {this.props.name}!</p>
        <p>{this.title}</p>
      </div>
    )
  }
}

export default Greetings;
