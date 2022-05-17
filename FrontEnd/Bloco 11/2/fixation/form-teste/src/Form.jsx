import React, { Component } from 'react';
import Availability from './Availability';
import FavoriteKeyword from './FavoriteKeyword';
import Message from './Message';

class Form extends Component {
  // constructor() {
  //   super()
  //   this.handleChange = this.handleChange.bind(this);
  //   this.state = {
  //     message: '',
  //   }
  // }

  state = {
    favoriteKeyword: '',
    availability: false,
    message: ''
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { favoriteKeyword, availability, message } = this.state;
    return (
      <main className='App'>
        <header>
        </header>
        <section>
          <form action="">
            <fieldset>
              <legend>
                <h1>Formulário de Teste</h1>
              </legend>
              <FavoriteKeyword value={favoriteKeyword} handleChange={this.handleChange} />
              <Availability value={availability} handleChange={this.handleChange} />
              <Message value={message} handleChange={this.handleChange} />
              <fieldset>
                <label>
                  Insira um arquivo:
                  <input type="file" />
                </label>
              </fieldset>
            </fieldset>
          </form>
        </section>
      </main >
    )
  }
}

export default Form;
