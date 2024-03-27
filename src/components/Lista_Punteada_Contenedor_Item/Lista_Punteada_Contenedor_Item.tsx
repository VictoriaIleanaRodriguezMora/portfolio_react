// import React from 'react'
import Lista_Punteada_Item from "../Lista_Punteada_Item/Lista_Punteada_Item";

const Lista_Punteada_Contenedor_Item = () => {
  return (
    <ul className="lista">
      <Lista_Punteada_Item
        contenido_prop={"1. Primer Capítulo Lorem ipsum dolor sit amet."}
      />
      <Lista_Punteada_Item
        contenido_prop={"2. Primer Capítulo Lorem ipsum dolor sit amet."}
      />
    </ul>
  );
};

export default Lista_Punteada_Contenedor_Item;
