import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage, name } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p>{greetingsMessage[0]}, {name[2]}, my awesome {id}th component </p>
      </div>
    );
  }
};

export default Users;
