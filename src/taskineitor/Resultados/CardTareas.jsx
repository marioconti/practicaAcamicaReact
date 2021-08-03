import React from "react";
import { tareas } from "../arrayTaskineitor";
import "./Card.css";

export const Tareas = () => {
  // se hace toda la lógica del mapeo antes del return. Declaraciones de variables que funcionarán dentro del scoup
  let variable = tareas.map((e) => {
    let fecha1 = new Date().getTime() / 1000;
    let fecha2 = new Date(e.fechaCreacion).getTime() / 1000;
    let fechaTarea = fecha1 - fecha2;
    let fechaTareaDias = fechaTarea / 60 / 60 / 24;
    let fechaDiaEntero = fechaTareaDias.toFixed(0);

    return (
      // instanciación de la función que mapeará el componente, trayendo cada vez que pasé por los objetos del array los valores de cada propiedad
      <>
        <CardTareas
          titulo={e.titulo}
          fechaCreacion={e.fechaCreacion}
          categoria={e.categoria}
          // en este caso el valor no está sacado del array en principio, sino de las declaraciones de variables que se hicieron antes del return, que igualmente forman parte del array (es decir, que igual se repetiran en cada indice) porque yo la estoy solicitando en este caso en el template string
          fechas={fechaDiaEntero}
        />
      </>
    );
  });

  return variable;
};

export const CardTareas = (props) => {
  const infoTarea = () => {
    console.log(`Esta es la tarea: ${props.titulo}`);
  };

  const infoFecha = () => {
    console.log(`Su fecha de creación es: ${props.fechaCreacion}`);
  };

  const borrarTarea = () => {
    const fechaHoyLarga = new Date();
    // hay alguna forma que no salga todo el chorizo ese en ingles? Esta se me ocurre pero no se si es práctica
    const fechaAño = fechaHoyLarga.getFullYear();
    const fechaMes = fechaHoyLarga.getMonth()+1;
    const fechaDia = fechaHoyLarga.getDate();

    console.log("¿Deseas borrar esta tarea?");
    alert(
      "Deseas borrar -" +
        props.titulo +
        " - hoy " +
        fechaDia +
        "/" +
        fechaMes +
        "/" +
        fechaAño
    );
  };

  return (
    <div className="card-container">
      <p onClick={infoTarea} className="tarea-titulo">
        {props.titulo}
      </p>
      <div onClick={infoFecha} className="tarea-fecha">
        <p className="fecha">
          {props.fechaCreacion} - {`Hace ${props.fechas} días`}
        </p>
      </div>
      <div className="tarea-categoria">
        <p>Categoria:</p>
        <p className="categoria">{props.categoria}</p>
      </div>
      <div className="contenedor-svg">
        <div>
          <i className="imagen-svg far fa-square"></i>
        </div>
        {/*FIXME: ¿Por que tengo que poner el evento en un div para que funcione y no puedo hacer la invocación directamente en el i? */}
        <div onClick={borrarTarea}>
          <i className="imagen-svg fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};
