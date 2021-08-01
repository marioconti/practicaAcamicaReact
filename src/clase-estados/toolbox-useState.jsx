import React, { useState } from "react";

export function Checkbox() {
  let infoEstado = useState(false);

  let valorActual = infoEstado[0];
  let actualizarEstado = infoEstado[1];

  console.log("el valor actual es: " + valorActual);

  const manejarCambio = (valorActual) => {
    console.log("se disparo el evento onChange...");
    if (valorActual === true) {
      actualizarEstado(false);
    } else {
      actualizarEstado(true);
    }
  };

  return (
    <>
      <input checked={valorActual} onChange={manejarCambio} type="checkbox" />
    </>
  );
}
// ATENCION:FIXME: una vez hecho el primer checkbox queda marcado ¿como se sacaba?


// El patrón que aquí se implementa, va a ser un patrón que puede repetirse en otros componentes con otros valores y con otro tipo de logica de actualziación
// Aquí solo tenemos un condicional de if y else porque son dos posibilidades, pero mas adelante vamos a tener otro tipo de variables como arrays, numeros, cualquier otro tipo de valor. Vamos a tener que leer propiedades de esos valores para poder tomar desiciones.
/*Aqui los pasos son::
1. vamos declaramos un estado inicial
2. vamos a recibir información de ese estado
3. la vamos a dividir en dos partes
4. luego una parte la ponemos en una variable, en el valor del componente acutal y la otra va al evento, a la actualización que irá a la logíca que implementaremos (en este caso en el condicional), para que segun como cambié cambie el estado
*/ 

// ¿El segundo parametro, actualizar estado, es una fx, forma parte de useState?