import { Interface_Proyecto_Item } from "../../../../interfaces/Interface_Proyecto_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const Proyectos_Item: React.FC<Interface_Proyecto_Item> = ({
  project_description,
  project_title,
  project_icon,
  project_github_link,
  project_deploy_link
}) => {




  return (
    <li>
      <div className="proyectos_div">
        <h4>{project_title}</h4>
        <p>{project_description}</p>
        {project_icon.map((icon, i) => {
          return (<FontAwesomeIcon key={i} icon={icon} />)
        })}
        <ul>
          {project_deploy_link ? (
            <>
              <li>
                <a href={project_github_link}>
                  <FontAwesomeIcon icon={faGithub} />Code
                </a>
              </li>
              <li>
                <a href={project_deploy_link}>
                  <FontAwesomeIcon icon={faLink} /> Ver proyecto
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
      </div>
    </li >
  );
};

export default Proyectos_Item;
