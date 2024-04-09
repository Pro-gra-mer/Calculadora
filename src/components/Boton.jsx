import React from "react";
import "../css/Boton.css";

export const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`} // props.children es el valor dentro de las etiquetas de un componente
      onClick={() => props.manejarClick(props.children)} // Una función llama a otra función
    >
      {props.children}
    </div>
  );
};
