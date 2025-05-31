import React from "react";
import Style from "./ButtonStart.module.css";

function ButtonStart({ children, width }) {
  return (
    <button className={Style.button} style={{ width: `${width}` }}>
      {children}
    </button>
  );
}

export default ButtonStart;
