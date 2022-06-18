import React, { Component } from "react";
import { IntensDoCarrinho } from "./ItensDoCarrinho";
import {StyledCarrinho} from "./StyledCarrinho";

export class Carrinho extends Component {
  pegarValorTotal = () => {
    let valorTotal = 0

    for(let produto of this.props.produtosNoCarrinho){
      valorTotal += produto.valor * produto.quantify
    }
    return valorTotal
  }
  render() {
    return (
      <StyledCarrinho>
        <h1>Carrinho</h1>
        <listaCarrinho>
          {this.props.produtosNoCarrinho.map((produto) =>{
            return <IntensDoCarrinho
            itemCarrinho={produto} removeProdutoDoCarrinho={this.props.removeProdutoDoCarrinho}
            />
          })}
        </listaCarrinho>
        <p>Total: R${this.pegarValorTotal()}</p>
      </StyledCarrinho>
    );
  }
}
