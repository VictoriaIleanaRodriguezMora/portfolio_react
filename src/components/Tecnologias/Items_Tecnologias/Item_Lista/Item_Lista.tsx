import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Interface_Lista_Item } from "../../../../interfaces/Interface_Lista_Item";

const Lista_Item: React.FC<Interface_Lista_Item> = ({
  className_item,
  icon_item,
  span_item,
}) => {
  return (
    <>
      {className_item.map((item, i) => {
        return (
          <li>
            <FontAwesomeIcon className={`tecnologias__item--dev  ${item}`} icon={icon_item[i]} />
            <span> {span_item[i]} </span>
          </li>
        );
      })}
    </>
  );
};

export default Lista_Item;
