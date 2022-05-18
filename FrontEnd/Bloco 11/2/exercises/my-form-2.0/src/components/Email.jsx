import React, { Component } from "react";

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email:
        </label>
        <input
          name="email"
          type="text"
          maxLength={40}
          required
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Email