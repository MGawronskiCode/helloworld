import React, {Component} from 'react';

import './../App.css';

class Counter extends Component {
  
  constructor(props) {
    super(props);
    this.title = "Counter";
    this.state = { clickCounter : 0};


  }
  
  setCounter(counter)
  {
    console.log("setCounter");
    this.setState({clickCounter : counter});
  }

  renderClickCount()
  {
    return <p>Counter: {this.state.clickCounter}</p>
  }

  setTitle()
  {
    console.log(this.title);
    this.title = "Updated counter"
    console.log(this.title);
  }
  render() {
    return (
      <div>
        {this.title}
        {this.renderClickCount()}
        <button onClick={() => this.setCounter(this.state.clickCounter + 1)}>+1</button>
        <button onClick={() => this.setTitle()}>Update title</button>
      </div>
    )
  }
}

export default Counter;
