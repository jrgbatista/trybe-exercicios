import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from "./components/Users";
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/users/:id"
            render={(props) =>
              <Users {...props}
                greetingsMessage={["Good morning", "Good afternoon", "Good evening"]}
                name={["João", "Gilberto", "Clécio"]}
              />}
          />
          <Route
            path="/strict-access"
            render={(props) =>
              <StrictAccess {...props}
                user={{ username: 'joao', password: '1234' }}
              />}
          />
          <Route path="/about"><About /></Route>
          <Route exact path="/"><Home /></Route >
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
