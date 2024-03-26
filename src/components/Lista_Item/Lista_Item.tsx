import React from "react";

interface Interface_Contenido_Prop {
  contenido_prop: string
}

const Lista_Item: React.FC<Interface_Contenido_Prop> = ({ contenido_prop } ) => {
  return (
    <li>
      <a>{contenido_prop}</a>
    </li>
  );
};

export default Lista_Item;
