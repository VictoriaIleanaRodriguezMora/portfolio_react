import { Interface_Proyecto_Item } from "../../../../interfaces/Interface_Proyecto_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const Proyectos_Item: React.FC<Interface_Proyecto_Item> = ({
  project_description,
  project_title,
  project_icon,
  project_github_link,
  project_deploy_link,
  project_item_className,
  project_id,
  project_image
}) => {

  return (
    <li className="proyectosItem" >
      {project_image
        ?
        <div id={project_id} className="proyectosItem__img"  >
          <img src={project_image} alt="Imagen"  />
        </div>
        : ""}

      <div className="proyectosItem__content">
        <h4>{project_title}</h4>
        <p>{project_description}</p>

        {/* Iconos Tecnologias */}
        <ul className="proyectosItem__technologies" >
          {project_icon.map((icon, i) => {
            return (
              <li>
                <FontAwesomeIcon className={`proyectosItem__icon-dev ${project_item_className[i]} `} key={i} icon={icon} />
              </li>
            )
          })}
        </ul>
        {/* Iconos Tecnologias */}

        {/* Iconos Links */}
        <ul className="proyectosItem__codeLinks" >
          {project_deploy_link ? (
            <>
              <li>
                <a href={project_github_link}>
                  <FontAwesomeIcon icon={faGithub} />
                  Code
                </a>
              </li>
              <li>
                <a href={project_deploy_link}>
                  <FontAwesomeIcon icon={faLink} className="proyectosItem__links-icon" />
                  Ver proyecto
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href={project_github_link}>
                <FontAwesomeIcon icon={faGithub} />Code
              </a>
            </li>
          )}
        </ul>
        {/* Iconos Links */}

      </div>
    </li >
  );
};

export default Proyectos_Item;
