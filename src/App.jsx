import React from "react";
import { Header } from "./taskineitor/Header/Header";
import { Filtros } from "./taskineitor/Filtros/Filtros";
import { Resultados } from "./taskineitor/Resultados/Resultados";
// import {
//   CuadradoNaranja,
//   CuadradoAzul,
//   CuadradoRosa,
// } from "./clase-eventos/eventos";
// import { Cuadrados } from "./clase-eventos/Cuadrado";
// import { Checkbox } from "./clase-estados/toolbox-useState";
// import { Checkbox } from "./clase-estados/challenge";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Filtros />
      <Resultados />
    </div>
  );
}

export default App;
