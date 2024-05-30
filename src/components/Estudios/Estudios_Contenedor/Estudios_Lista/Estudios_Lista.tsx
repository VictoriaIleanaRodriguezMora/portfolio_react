import Estudios_Item from "./Estudios_Item/Estudios_Item";
import { Interface_Contenido_Prop } from "../../../../interfaces/Interface_Contenido_Prop";

const Estudios_Lista: React.FC<Interface_Contenido_Prop> = ({ contenidos_prop }) => {
  return (
    <>
      <ul>
        <Estudios_Item
          contenidos_prop={contenidos_prop}
        />
      </ul>
    </>
  );
};

export default Estudios_Lista;