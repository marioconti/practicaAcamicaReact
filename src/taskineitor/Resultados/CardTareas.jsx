import React from "react";
import { tareas } from "./arrayTaskineitor";
import "./Card.css";

export const Tareas = () => {
  let variable = tareas.map((e) => {
    return (
      <>
        <CardTareas
          titulo={e.titulo}
          fechaCreacion={e.fechaCreacion}
          categoria={e.categoria}
        />
      </>
    );
  });
  return variable;
};

export const CardTareas = (props) => {
  return (
    <div className="card-container">
      <p className="tarea-titulo">{props.titulo}</p>
      <div className="tarea-fecha">
        <p className="fecha">{props.fechaCreacion}</p>
      </div>
      <div className="tarea-categoria">
        <p>Categoria:</p>
        <p className="categoria">{props.categoria}</p>
      </div>
      <div className="contenedor-svg">
        <i class="imagen-svg far fa-square"></i>
        <i class="imagen-svg fas fa-trash-alt"></i>
      </div>
    </div>
  );
};
