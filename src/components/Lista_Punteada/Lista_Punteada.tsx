import "../../sass/index.scss";
import Lista_Punteada_Contenedor_Item from "./Lista_Punteada_Contenedor_List/Lista_Punteada_Contenedor_List";
import { Interface_Lista_Punteada } from "../../interfaces/Interface_Lista_Punteada";

const Lista_Punteada: React.FC<Interface_Lista_Punteada> = ({ title_h2, items }) => {
  return (
    <>
      <section id="experiencia" className="experiencia">
        <div>
          <h2 className="experiencia-title">{title_h2}</h2>

          {items.map((e, i) => {
            return (<Lista_Punteada_Contenedor_Item
              key={i}
              posicion_prop={e.posicion_prop}
              duracion_prop={e.duracion_prop}
              empresa_prop={e.empresa_prop}
              contenidos_prop={e.contenidos_prop}
            />)
          })
          }

        </div>
      </section>
    </>
  );
};

export default Lista_Punteada;
