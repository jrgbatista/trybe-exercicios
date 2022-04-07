import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick() {
    console.log(this);
    console.log('Clicou!');
  }
  render() {
    return <button onClick={this.HandleClick}>My Button</button>;
  }
}


export default App;
