import Lista_Punteada_Item from "./Lista_Punteada_Item/Lista_Punteada_Item";
import { Interface_Contenido_Prop } from "../../../../interfaces/Interface_Contenido_Prop";

const Lista_Punteada_List: React.FC<
  Interface_Contenido_Prop
> = ({ contenidos_prop }) => {
  return (
    <>
      <ul>
        <Lista_Punteada_Item
          contenidos_prop={contenidos_prop}
        />
      </ul>
    </>
  );
};

export default Lista_Punteada_List;
