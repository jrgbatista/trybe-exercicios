import React, { Component } from "react";

class Tipo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <input
          name="tipo"
          type="radio"
          required
          value={value}
          onChange={handleChange}
        />
        <label htmlFor="casa">
          Casa
        </label>
        <input
          name="tipo"
          type="radio"
          required
          value={value}
          onChange={handleChange}
        />
        <label htmlFor="apartamento">
          Apartamento
        </label>
      </div>
    )
  }
}

export default Tipo