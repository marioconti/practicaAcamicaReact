import React from "react";
import "./Filtros.css";

export const Filtros = () => {
  return (
    <div className="contenedor-filtros">
      <div className="inputs-dates">
        <div className="borde-recto inputs">
          <p>input type=”date”</p>
        </div>
        <div className="borde-recto inputs">
          <p>input type=”date”</p>
        </div>
      </div>
        <div className="inputs-pils">
          <div className="borde-ovalado inputs">
            <p>{"<select> categorias"}</p>
          </div>
          <div className="borde-ovalado inputs">
            <p> {"<select> estado tarea"}</p>
          </div>
        </div>
    </div>
  );
};
