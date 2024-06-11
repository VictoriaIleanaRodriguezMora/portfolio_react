import "../../../sass/index.scss";
import { Interface_Lista_Punteada_Contenedor_Items } from "../../../interfaces/Interface_Lista_Punteada_Contenedor_Item";
import Lista_Punteada_List from "./Lista_Punteada_List/Lista_Punteada_List";

const Lista_Punteada_Contenedor_Item: React.FC<
  Interface_Lista_Punteada_Contenedor_Items
> = ({ posicion_prop, duracion_prop, empresa_prop, contenidos_prop }) => {
  return (
    <>
      <div className="listaPunteada__item ">
        <h5>{duracion_prop}</h5>
        <div>
          <h4>{posicion_prop}</h4>
          <div className="listaPunteada__item-empresa ">
            <p>{empresa_prop}</p>
          </div>
          <Lista_Punteada_List contenidos_prop={contenidos_prop} />
        </div>
      </div>
    </>
  );
};

export default Lista_Punteada_Contenedor_Item;
