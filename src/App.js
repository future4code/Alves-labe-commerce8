import React, { Component } from "react";
import styled from "styled-components";
import  {Carrinho}  from "./Components/Carrinho/Carrinho";
import {Product} from "./Components/Produtos/Produtos";
import {Filter} from "./Components/Filtros/Filtro"
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
        name: "Foguete Turbo",
        value: 150,
        image: FogueteTurbo,
      },
      {
        id: 1,
        name: "Foguete espacial",
        value: 350,
        image: FogueteEpaco,
      },
      {
        id: 1,
        name: "Nave Star wars",
        value: 500,
        image: NaveStarWars,
      },
      {
        id: 1,
        name: "Falcon Star",
        value: 620,
        image: FalcaoStar,
      },
      {
        id: 1,
        name: "Foguete Aero",
        value: 700,
        image: FogueteAero,
      },
      {
        id: 1,
        name: "Foguete Unipolar",
        value: 750,
        image: FogueteUnipolar,
      },
    ],
  }; 
  render() {
    return (
      <MainContainer>
       {/* {this.componentsBrinquedos} */}
        <Filter/>
        <Product product={this.state.listaBrinquedos}/>
   <Carrinho />
      </MainContainer>
    );
  }
}

export default App;
