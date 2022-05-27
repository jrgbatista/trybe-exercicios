import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  state = {
    showProfile: true,
  }

  changeProfile = () => {
    const { showProfile } = this.state;
    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;

    return (
      <div>
        <div className="gitNetwork d-flex flex-column justify-content-center">
          {showProfile && <Profile />}
          <div className="central d-flex justify-content-center">
            <button
              className="btn btn-dark align-self-center"
              type="button"
              onClick={this.changeProfile}
            >
              Mostrar / Ocultar Perfil
            </button>
          </div>
          <Connections />
        </div>
      </div>
    )
  }
}

export default App;
