import React, { Component } from "react";

class ResumoCurriculo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="resumo">
          Resumo:
        </label>
        <textarea
          name="resumo"
          maxLength={1000}
          required
          value={value}
          onChange={handleChange}
        />
      </section>)
  }
}

export default ResumoCurriculo