import React from "react";
import "./eventos.css";
import { mostrarEvento } from "./eventos";


// implementa fx cuadrados el componente
export function Cuadrados() {
  return (
    <div className="container">
      <Cuadrado color="naranja" />
      <Cuadrado color="azul" />
      <Cuadrado color="rosa" />
    </div>
  );
}

export function Cuadrado(e) {
  return <div onClick={mostrarEvento} className={`cuadrado ${e.color}`}></div>;
}

// Pregunta ¿Por que se utiliza template string para llamar el parametro que se pasa por funcion?