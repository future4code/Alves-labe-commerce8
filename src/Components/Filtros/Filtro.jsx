import React, { Component } from 'react';
import {StyledFilter} from "./StyledFiltros"

export class Filter extends Component {
  render() {
    return (
        <StyledFilter>
        <h1>Filtro</h1>
        <div>
          <input placeholder="Max"/>
          <input placeholder="Min"/>
          <input placeholder="Todos"/>
        </div>
      </StyledFilter>
    )
  }
}
