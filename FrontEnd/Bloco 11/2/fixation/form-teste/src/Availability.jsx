import React, { Component } from "react";

class Availability extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Estará disponível?
        <input
          type="checkbox"
          name="availability"
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default Availability;