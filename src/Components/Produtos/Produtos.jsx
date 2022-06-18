import React, { Component } from "react";
import {
  MainProduct,
  HeaderProduct,
  SectionProduct,
  PhotoProduct,
  PoductDescription,
  CadaProduto,
} from "./StaledProdutos";

export class Product extends Component {
  state = {
    ordenar: "CRESCENTE",
  };
  mudarOrdem = (event) => {
    this.setState({ ordenar: event.target.value });
    // if (this.state.ordenar === "CRESCENTE"){
    //   return
    // }
  };
  render() {
    const componentsBrinquedos = this.props.product
      .sort((a, b) => {
        if (this.state.ordenar !== "CRESCENTE") {
          return -1
        } else {
          return true
        }
      })
      .map((brinquedo) => {
        return (
          <CadaProduto>
            <PhotoProduct src={brinquedo.image} />
            <PoductDescription>
              {brinquedo.name}
              {brinquedo.value}
              <button>Adicionar ao carrinho</button>
            </PoductDescription>
          </CadaProduto>
        );
      });
    return (
      <MainProduct>
        <HeaderProduct>
          <p>Quantidade de produtos:</p>
          <label for="sort">Ordenação:</label>
          <select
            name="sort"
            value={this.state.ordenar}
            onChange={this.mudarOrdem}
          >
            <option value="CRESCENTE">Crescente</option>
            <option value="DECRESCENTE">Decrescente</option>
          </select>
        </HeaderProduct>
        <SectionProduct>{componentsBrinquedos}</SectionProduct>
      </MainProduct>
    );
  }
}
