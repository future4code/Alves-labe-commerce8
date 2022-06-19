import React, { Component } from "react";
import styled from "styled-components";
import { Carrinho } from "./Components/Carrinho/Carrinho";
import { Product } from "./Components/Produtos/Produtos";
// import {Filter} from "./Components/Filtros/Filtro"
import FogueteTurbo from "./img/FogueteTurbo.jpg"
import FogueteEpaco from "./img/FogueteEspaco.jpg";
import FalcaoStar from "./img/FalcaoStar.jpg";
import NaveStarWars from "./img/NaveStarWars.jpg";
import FogueteUnipolar from "./img/FogueteUnipolar.jpg";
import FogueteAero from "./img/FogueteAero.png";

const MainContainer = styled.div`
  display: flex;
`;



class App extends Component {
  state = {
    listaBrinquedos: [
      {
        id: 1,
        name: "Foguete Turbo ",
        value: 150,
        image: FogueteTurbo,
        contador: 0
      },
      {
        id: 2,
        name: "Foguete espacial ",
        value: 350,
        image: FogueteEpaco,
        contador: 0
      },
      {
        id: 3,
        name: "Nave Star wars ",
        value: 500,
        image: NaveStarWars,
        contador: 0
      },
      {
        id: 4,
        name: "Falcon Star ",
        value: 620,
        image: FalcaoStar,
        contador: 0
      },
      {
        id: 5,
        name: "Foguete Aero ",
        value: 700,
        image: FogueteAero,
        contador: 0
      },
      {
        id: 6,
        name: "Foguete Unipolar ",
        value: 750,
        image: FogueteUnipolar,
        contador: 0
      },
    ],
    listaCarrinho: [],
    totalDaLista: 0,
    
  };
  adicionarAoCarrinho = (id) => {
    this.state.listaBrinquedos.map((brinquedos) => {
      if (brinquedos.id === id) {
        this.state.listaCarrinho = [brinquedos, ...this.state.listaCarrinho]
        this.setState({ listaCarrinho: this.state.listaCarrinho })
        brinquedos.contador = brinquedos.contador + 1
        this.setState({ totalDaLista: this.state.totalDaLista + brinquedos.value })
      }
    })
  }

  removeDoCarrinho = (id) => {
    this.state.listaBrinquedos.map((brinquedos) => {
      if (brinquedos.id === id) {
        if (brinquedos.contador > 0) {
          brinquedos.contador = brinquedos.contador - 1
          this.setState({ totalDaLista: this.state.totalDaLista - brinquedos.value })
          // this.setState({ totalDaLista: totalDaLista, ...this.state.listaCarrinho })
          // this.setState({ totalDaLista: this.state.totalDaLista.splice(brinquedos.id) })
        }
        if (brinquedos.contador <= 0) {
          const listaBrinquedo = this.state.listaCarrinho.filter((brinquedos) => {
            return brinquedos.id !== id
          })
          this.state.listaCarrinho = listaBrinquedo
          this.setState({ listaCarrinho: this.state.listaCarrinho })
        }

      }

    })
  }

  render() {
    console.log(this.state.listaCarrinho)
    return (
      <MainContainer>
        {/* <Filter/> */}
        <Product
          key={this.state.listaBrinquedos.id}
          product={this.state.listaBrinquedos}
          adicionarAoCarrinho={() => this.adicionarAoCarrinho(this.state.listaBrinquedos.id)}
        />
        <Carrinho
          key={this.state.listaBrinquedos.id}
          removeDoCarrinho={
            this.removeDoCarrinho
          }
          totalDaLista={
            this.state.totalDaLista
          }
          listaCarrinho={
            this.state.listaCarrinho
          }
        />
      </MainContainer>
    );
  }
}
export default App;
