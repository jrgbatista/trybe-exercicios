import React, { Component } from "react";

class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="nome">
          Nome:
        </label>
        <input
          name="nome"
          type='text'
          required
          maxLength={40}
          value={value.toUpperCase()}
          onChange={handleChange}
        />
      </div >
    )
  }
}

export default Nome