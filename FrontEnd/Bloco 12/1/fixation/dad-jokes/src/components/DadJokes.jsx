import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  state = {
    jokeObj: undefined,
    loading: true,
    storedJokes: [],
  }

  fetchJoke = async () => {
    this.setState({loading: true},
      async() => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
      })
    })
  }

  componentDidMount = () => {
    this.fetchJoke();
  }

  saveJoke = () => {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  render() {
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */

        loading ? loadingElement : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke} />
      }

      </div>
    );
  }
}

export default DadJoke;