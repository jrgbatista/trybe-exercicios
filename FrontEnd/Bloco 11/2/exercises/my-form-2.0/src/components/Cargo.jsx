import React, { Component } from "react";

class Cargo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="cargo">
          Cargo:
        </label>
        <textarea
          name="cargo"
          maxLength={40}
          required
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Cargo