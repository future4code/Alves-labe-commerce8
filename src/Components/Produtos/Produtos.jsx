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
  
  render() {
    const componentsBrinquedos = this.props.product.map((brinquedo) => {
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
          <label>
            Ordenação:
            <select>
              <option value="CRESCENTE">Crescente</option>
              <option value="DESCENTE">Descente</option>
            </select>
          </label>
        </HeaderProduct>
        <SectionProduct>{componentsBrinquedos}</SectionProduct>
      </MainProduct>
    );
  }
}
