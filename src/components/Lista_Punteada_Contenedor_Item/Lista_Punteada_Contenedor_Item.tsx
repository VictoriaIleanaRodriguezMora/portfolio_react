// import React from 'react'
import "./Lista_Punteada_Contenedor_Item.css";
import Lista_Punteada_Item from "../Lista_Punteada_Item/Lista_Punteada_Item";
import { Interface_Lista_Punteada_Contenedor_Items } from "../../interfaces/Interface_Lista_Punteada_Contenedor_Item";

const Lista_Punteada_Contenedor_Item: React.FC<
  Interface_Lista_Punteada_Contenedor_Items
> = ({ posicion_prop, duracion_prop, empresa_prop }) => {
  return (
    <>
      <div className="experiencia-item">
        <h4>{posicion_prop}</h4>
        <h5>{duracion_prop}</h5>
        <p>{empresa_prop}</p>
        <Lista_Punteada_Item
          contenidos_prop={[
            "Dictar las clases de HTML, CSS y JavaScript",
            "Responder consultas fuera de clase",
          ]}
        />
      </div>
    </>
  );
};

export default Lista_Punteada_Contenedor_Item;
