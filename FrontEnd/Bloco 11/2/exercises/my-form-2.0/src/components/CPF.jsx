import React, { Component } from "react";

class CPF extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="cpf">
          CPF:
        </label>
        <input
          name="cpf"
          type="text"
          maxLength={11}
          required
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default CPF