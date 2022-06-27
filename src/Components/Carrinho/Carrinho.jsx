import React, { Component } from "react";
import {StyledCarrinho} from "./StyledCarrinho";

export class Carrinho extends Component {
 
  render() {
    return (
      <StyledCarrinho>
        <h1>Carrinho</h1>
        <div>
          {this.props.listaCarrinho}
          {this.props.totalDaLista}
          <button onClick={this.props.removeDoCarrinho}>Remover</button>

          
        </div>
      </StyledCarrinho>
    );
  }
}
