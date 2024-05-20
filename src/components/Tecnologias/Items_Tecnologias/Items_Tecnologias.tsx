import "../../../sass/index.scss";
import Lista_Item from "./Lista_Item/Lista_Item";
import { Interface_Lista_Tecnologia } from "../../../interfaces/Interface_Lista_Tecnologias";

const Items_Tecnologias: React.FC<Interface_Lista_Tecnologia> = ({
  className_item,
  icon_item,
  span_item,
  titulo_tecnologias,
}) => {
  return (
    <article>
      <h3>{titulo_tecnologias}</h3>
      <ul>
        <Lista_Item
          className_item={className_item}
          icon_item={icon_item}
          span_item={span_item}
        />
      </ul>
    </article>
  );
};

export default Items_Tecnologias;
