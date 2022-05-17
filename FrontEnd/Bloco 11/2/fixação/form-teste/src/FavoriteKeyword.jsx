import React, { Component } from "react";

class FavoriteKeyword extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label>
          Escolha sua palavra chave favorita:
          <select
            name="favoriteKeyword"
            value={value}
            onChange={handleChange}
          >
            <option value="component">Componente</option>
            <option value="state">Estado</option>
            <option value="event">Evento</option>
          </select>
        </label>
      </div>
    )
  }
}

export default FavoriteKeyword