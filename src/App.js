import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleDecrement() {
    console.log(this)
  }

 render() {
    return(
      <div>
        <button onClick={this.handleDecrement}></button>
        <span>{this.state.count}</span>
        <button></button>
      </div>
    );
 }
}

export default Counter;