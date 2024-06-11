import Proyectos_Item from "./Proyectos_Item/Proyectos_Item";
import { Interface_Proyecto_Item } from "../../../interfaces/Interface_Proyecto_Item";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Proyectos_Lista: React.FC<Interface_Proyecto_Item> = ({
  project_description,
  project_title,
  project_icon,
  project_github_link,
  project_deploy_link,
  project_item_className,
  project_id
}) => {
  return (
    <article>
      <ul>
        <Proyectos_Item
          project_description={project_description}
          project_title={project_title}
          project_icon={project_icon}
          project_github_link={project_github_link}
          project_deploy_link={project_deploy_link}
          project_item_className={project_item_className}
          project_id={project_id}
        />
      </ul>
    </article>
  );
};

export default Proyectos_Lista;
