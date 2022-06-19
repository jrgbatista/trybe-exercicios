// App.js
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    joke: '',
  };

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then(({joke}) => this.setState({ joke}));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <h1>{joke}</h1>
      </div>
    );
  }
}

export default App;