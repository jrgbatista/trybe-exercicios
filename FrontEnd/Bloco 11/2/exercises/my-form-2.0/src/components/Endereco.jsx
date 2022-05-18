import React, { Component } from "react";

class Endereco extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="endereco">
          Endereço:
        </label>
        <input
          name="endereco"
          type="text"
          maxLength={200}
          required
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Endereco