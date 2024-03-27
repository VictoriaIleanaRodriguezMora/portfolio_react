// import React from "react";
import "./Lista_Punteada.css";
import Lista_Item from "../Lista_Punteada_Item/Lista_Item";

const Lista_Punteada = () => {
  return (
    <>
      <div className="Lista_Punteada">
        <aside>
          <div
            className="Lista_Punteada-contenido"
            id="Lista_Punteada-contenido"
          >
            <h3>Temario</h3>
            <ul className="lista">
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
