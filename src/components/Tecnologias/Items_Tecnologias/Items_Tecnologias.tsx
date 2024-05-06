import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitAlt,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faNode,

} from "@fortawesome/free-brands-svg-icons";

const Items_Tecnologias = () => {
  return (
    <div>
      Items_Tecnologias
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGitAlt} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} />
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} />
        </li>
        <li>
          <FontAwesomeIcon icon={faJsSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSass} />
        </li>
        <li>
          <FontAwesomeIcon icon={faNode} />
        </li>
      </ul>
    </div>
  );
};

export default Items_Tecnologias;
