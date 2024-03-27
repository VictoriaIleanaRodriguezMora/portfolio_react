import { Interface_Contenido_Prop } from "../../interfaces/Interface_Contenido_Prop";

const Lista_Punteada_Item: React.FC<Interface_Contenido_Prop> = ({ contenido_prop } ) => {
  return (
    <li>
      <a>{contenido_prop}</a>
    </li>
  );
};

export default Lista_Punteada_Item;
