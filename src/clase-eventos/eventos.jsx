import React from "react";
import "./eventos.css";

export const mostrarEvento = () => {
  console.log("Alguien hizo click");
};

export const CuadradoNaranja = () => {
  return (
    <div onClick={mostrarEvento} className="cuadrado naranja">
      cuadrado naranja
    </div>
  );
};

export const CuadradoAzul = () => {
  return (
    <div onClick={mostrarEvento} className="cuadrado azul">
      cuadrado naranja
    </div>
  );
};

export const CuadradoRosa = () => {
  return (
    <div onClick={mostrarEvento} className="cuadrado rosa">
      cuadrado naranja
    </div>
  );
};
// export default function App() {
//   return (
//     <div className="container">
//       <div onClick={mostrarEvento} className="cuadrado naranja">
//         cuadrado naranja
//       </div>
//       <div onClick={mostrarEvento} className="cuadrado azul">
//         cuadrado azul
//       </div>
//       <div onClick={mostrarEvento} className="cuadrado rosa">
//         cuadrado rosa
//       </div>
//     </div>
//   );
// }
// ==========================================================
// /* <CuadradoNaranja />
// <CuadradoAzul />
// <CuadradoRosa /> */
// ==========================================================

