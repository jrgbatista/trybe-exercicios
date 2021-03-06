import React, { Component } from 'react';
import ValidEmail from './ValidEmail';

class Email extends Component {
  state = {
    email: '',
    saveEmail: '',
  };

  changeEmail = (value) => {
    this.setState({ email: value });
  };

  changeSaveEmail = (value) => {
    this.setState({ saveEmail: value, email: '' });
  };
  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className='App'>
        <label htmlFor='id-email'>
          Email
          <input
            id='id-email'
            value={email}
            type='email'
            onChange={({ target }) => this.changeEmail(target.value)}
          />
        </label>
        <input
          id='id-send'
          type='button'
          value='Enviar'
          data-testid='id-send'
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id='id-back' type='button' value='Voltar' />
        <ValidEmail email={saveEmail}/>
      </div>
    );
  }
}

export default Email;
