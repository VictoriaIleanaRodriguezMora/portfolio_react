// import React from "react";
import "./Lista_Punteada.css";
import Lista_Punteada_Contenedor_Item from "../Lista_Punteada_Contenedor_Item/Lista_Punteada_Contenedor_Item";

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
            <Lista_Punteada_Contenedor_Item />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Lista_Punteada;
