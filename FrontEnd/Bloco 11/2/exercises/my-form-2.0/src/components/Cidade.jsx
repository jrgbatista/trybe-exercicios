import React, { Component } from "react";

class Cidade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="cidade">
          Cidade:
        </label>
        <input
          name="cidade"
          type="text"
          maxLength={28}
          required
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Cidade