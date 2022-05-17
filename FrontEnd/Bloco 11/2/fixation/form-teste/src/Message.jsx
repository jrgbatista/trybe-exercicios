import React, { Component } from "react";

class Message extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <legend>
          Insira a sua mensagem:
        </legend>
        <textarea
          name="message"
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Message