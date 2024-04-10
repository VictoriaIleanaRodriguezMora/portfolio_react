// import React from 'react'
import "./Lista_Punteada_Contenedor_List.css"
import { Interface_Lista_Punteada_Contenedor_Items } from "../../../interfaces/Interface_Lista_Punteada_Contenedor_Item";
import Lista_Punteada_List from "../Lista_Punteada_List/Lista_Punteada_List";

const Lista_Punteada_Contenedor_List: React.FC<
  Interface_Lista_Punteada_Contenedor_Items
> = ({ posicion_prop, duracion_prop, empresa_prop }) => {
  return (
    <>
      <div className="experiencia-item">
        <h4>{posicion_prop}</h4>
        <h5>{duracion_prop}</h5>
        <p>{empresa_prop}</p>
        <Lista_Punteada_List />
      </div>
    </>
  );
};

export default Lista_Punteada_Contenedor_List;
