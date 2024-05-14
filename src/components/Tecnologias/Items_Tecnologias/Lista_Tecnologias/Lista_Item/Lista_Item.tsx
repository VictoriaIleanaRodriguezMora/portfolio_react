import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Interface_Lista_Item } from "../../../../../interfaces/Interface_Lista_Item"

const Lista_Item: React.FC<Interface_Lista_Item> = ({ className_item, icon_item, span_item }) => {
  return (
    <li>
      <FontAwesomeIcon className={`dev ${className_item}`} icon={icon_item} />
      <span> {span_item} </span>
    </li>
  )
}

export default Lista_Item