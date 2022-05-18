import React, { Component } from "react";

class DescricaoDoCargo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="descricao">
          Descrição do Cargo:
        </label>
        <input
          name="descricao"
          type="text"
          maxLength={500}
          required
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default DescricaoDoCargo