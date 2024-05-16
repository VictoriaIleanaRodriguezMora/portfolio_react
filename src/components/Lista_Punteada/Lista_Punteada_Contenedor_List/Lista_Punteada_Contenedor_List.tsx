import "../../../sass/index.scss";
import { Interface_Lista_Punteada_Contenedor_Items } from "../../../interfaces/Interface_Lista_Punteada_Contenedor_Item";
import Lista_Punteada_List from "./Lista_Punteada_List/Lista_Punteada_List";

const Lista_Punteada_Contenedor_Item: React.FC<
  Interface_Lista_Punteada_Contenedor_Items
> = ({ posicion_prop, duracion_prop, empresa_prop }) => {
  return (
    <>
      <div className="experiencia-item list-steps-item">
        <h5>{duracion_prop}</h5>
        <div>
          <h4>{posicion_prop}</h4>
          <div className="fecha_empresa">
            <p>{empresa_prop}</p>
          </div>
          <Lista_Punteada_List />
        </div>
      </div>
    </>
  );
};

export default Lista_Punteada_Contenedor_Item;
