import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  setButtonColor = num => num % 2 === 0 && num !== 0 ? 'green' : 'white';

  handleClick = () => {
    this
      .setState(({ clicks }) => ({ clicks: clicks + 1, }),
        () => {
          console.log(`Button color: ${this.setButtonColor(this.state.clicks)}`);
        });
  }

  render() {
    const { clicks } = this.state;
    return (
      <button
        onClick={this.handleClick}
        style={{ backgroundColor: this.setButtonColor(clicks) }}
      >
        Counter: {this.state.clicks}
      </button>
    )
  }
}

export default Button;