// import React from "react";
import "./Lista_Punteada.css";
import Lista_Item from "../Lista_Punteada_Item/Lista_Item";

const Lista_Punteada = () => {
  return (
    <>
      <div className="contenedor">
        <aside>
          <div className="contenedor-temario" id="temario">
            <h3 className="titulo">Temario</h3>
            <ul className="lista">
              <li>
                <a>1. Primer Capítulo Lorem ipsum dolor sit amet.</a>
              </li>
              <Lista_Item
                contenido_prop={
                  "1. Primer Capítulo Lorem ipsum dolor sit amet."
                }
              />
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Lista_Punteada;
