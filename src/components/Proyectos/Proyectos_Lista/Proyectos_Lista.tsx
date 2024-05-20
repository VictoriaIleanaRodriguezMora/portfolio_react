import Proyectos_Item from "./Proyectos_Item/Proyectos_Item";
import { Interface_Proyecto_Item } from "../../../interfaces/Interface_Proyecto_Item";

const Proyectos_Lista: React.FC<Interface_Proyecto_Item> = ({
  project_link,
  project_description,
  project_title,
  //   project_icons,
  //   project_item_className
}) => {
  return (
    <article>
      <ul>
        <Proyectos_Item
          project_link={project_link}
          project_description={project_description}
          project_title={project_title}
        />
      </ul>
    </article>
  );
};

export default Proyectos_Lista;
