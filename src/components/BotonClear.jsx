import React from "react";
import "../css/BotonClear.css";

export const BotonClear = (props) => {
  return <div onClick={props.manejarClear}>{props.children}</div>;
};
