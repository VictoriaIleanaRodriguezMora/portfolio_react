import { Interface_Proyecto_Item } from "../../../../interfaces/Interface_Proyecto_Item";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Proyectos_Item: React.FC<Interface_Proyecto_Item> = ({
  project_link,
  project_description,
  project_title,
//   project_icons,
//   project_item_className
}) => {
  return (
    // {}
    <li>
      <div>
        <a href={project_link}> {project_link} </a>

        {project_title}
        {project_description}

        {/* {project_icons} */}
        {/* <FontAwesomeIcon className={`dev ${project_item_className}`} icon={project_icons} /> */}

      </div>
    </li>
  );
};

export default Proyectos_Item;
