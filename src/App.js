import React, { Component } from "react";
import styled from "styled-components";
import  {Carrinho}  from "./Components/Carrinho/Carrinho";
import {Product} from "./Components/Produtos/Produtos";
import {Filter} from "./Components/Filtros/Filtro"

const MainContainer = styled.div`
  display: flex;
`;



class App extends Component {
  render() {
    return (
      <MainContainer>
        <Filter/>
        <Product/>
   <Carrinho />
      </MainContainer>
    );
  }
}

export default App;
