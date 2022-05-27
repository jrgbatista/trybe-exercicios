import React from 'react';

class Connections extends React.Component {
  state = {
    user: '',
    list: [],
    counter: 0,
    background: '',
  };


  shouldComponentUpdate = (_nextProps, { list }) => {
    // 💡 o que será que vai aqui?
    const maxContactsNumber = 3;
    return list.length <= maxContactsNumber
  }

  componentDidUpdate = (_prevProps, prevState) => {
    // 💡 tá meio vazio esse método, não?
    const { list } = this.state;
    // eslint-disable-next-line no-unused-expressions
    if (prevState.list.length < list.length) {
      this.changeToBlue();
      // Ao adicionar um contato, a div ficará azul.
    } else if (prevState.list.length > list.length) {
      this.changeToCoral();
      // Ao deletar um contato, a div ficará coral.
    }
  }


  handleChange = ({ target: { value } }) => {
    this.setState({
      user: value,
    });
  }

  handleClick = async () => {
    const { user, list, counter } = this.state;
    const url = `https://api.github.com/users/${user}`;
    const isUserAbsent = !list.some((contact) => contact.login === user);

    try {
      const apiResponse = await fetch(url);
      const profileObject = await apiResponse.json();

      if (profileObject.login && isUserAbsent) {
        this.setState({
          list: [...list, profileObject],
          counter: counter + 1,
        });
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeToBlue = () => {
    this.setState({ background: 'connections-blue' });
  }

  changeToCoral = () => {
    this.setState({ background: 'connections-coral' });
  }

  removeContact = (loginToRemove) => {
    const { list, counter } = this.state;
    const updatedList = list.filter(({ login }) => login !== loginToRemove);

    this.setState({
      list: updatedList,
      counter: counter - 1,
    });
  }

  contactAdder = (counter) => {
    return (
      <div className="counter">
        <div>
          <h5>Quantidade de contatos:</h5>
          <span>{counter}</span>
        </div>
        <div className="form">
          <form className="input-group justify-content-center">
            <input
              className="form-control"
              type="text"
              onChange={this.handleChange}
              placeholder="Adicione seu contato famoso"
            />
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={this.handleClick}
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    );
  }

  contactList = (list) => {
    return (
      <div className="card-list d-flex flex-row justify-content-around">
        {list.map((api) => (
          <div className="card d-flex align-items-center" key={api.name}>
            <h5>{api.name}</h5>
            <img className="c-img" src={api.avatar_url} alt="Avatar" width="50%" />
            <button
              className="c-button btn btn-danger w-25 align-self-center"
              data-login={api.login}
              type="button"
              onClick={() => this.removeContact(api.login)}
            >
              X
            </button>
          </div>))}
      </div>
    );
  }

  render() {
    const { list, counter, background } = this.state;

    return (
      <div className={`git-connections ${background}`}>
        {this.contactAdder(counter)}
        {this.contactList(list)}
      </div>
    );
  }
}

export default Connections;