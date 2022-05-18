import React, { Component } from "react";
import Nome from "./Nome";
import Email from "./Email";
import CPF from "./CPF";
import Endereco from "./Endereco";
import Cidade from "./Cidade";
import Estado from "./Estado";
import Tipo from "./Tipo";
import Cargo from "./Cargo";
import DescricaoDoCargo from "./DescricaoDoCargo";
import ResumoCurriculo from "./ResumoCurriculo";

class Formulario extends Component {
  state = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: false,
    resumo: '',
    cargo: '',
    descricao: ''
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao } = this.state;
    return (
      <div>
        <section>
          <fieldset>
            <legend>
              Informações Pessoais
            </legend>
            <Nome value={nome} handleChange={this.handleChange} />
            <Email value={email} handleChange={this.handleChange} />
            <CPF value={cpf} handleChange={this.handleChange} />
            <Endereco value={endereco} handleChange={this.handleChange} />
            <Cidade value={cidade} handleChange={this.handleChange} />
            <Estado value={estado} handleChange={this.handleChange} />
            <Tipo value={tipo} handleChange={this.handleChange} />
          </fieldset>
        </section>
        <section>
          <fieldset>
            <legend>
              Experiência Profissional
            </legend>
            <ResumoCurriculo value={resumo} handleChange={this.handleChange} />
            <Cargo value={cargo} handleChange={this.handleChange} />
            <DescricaoDoCargo value={descricao} handleChange={this.handleChange} />
          </fieldset>
        </section>
      </div >
    )
  }
}

export default Formulario