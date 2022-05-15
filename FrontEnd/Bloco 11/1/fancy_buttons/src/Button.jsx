import React, { Component } from "react";

const handleClick1 = () => console.log('clicou no botão 1!');
const handleClick2 = () => console.log('clicou no botão 2!');
const handleClick3 = () => console.log('clicou no botão 3!');

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={handleClick1}>Botão 1</button>
        <button onClick={handleClick2}>Botão 2</button>
        <button onClick={handleClick3}>Botão 3</button>
      </div>
    )
  }
}

export default Button;