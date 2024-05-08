import "./Items_Tecnologias.css"
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
  faNpm,
  // faDatabase
} from "@fortawesome/free-brands-svg-icons";

const Items_Tecnologias = () => {
  return (
    <section>
      <article>
        <h3>Front End</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="css" icon={faCss3} />
          </li>
          <li>
            <FontAwesomeIcon className="html" icon={faHtml5} />
          </li>
          <li>
            <FontAwesomeIcon className="js" icon={faJsSquare} />
          </li>
          <li>
            <FontAwesomeIcon className="react" icon={faReact} />
          </li>
          <li>
            <FontAwesomeIcon className="sass" icon={faSass} />
          </li>
        </ul>
      </article>

      <article>
        <h3>Back End</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="node" icon={faNode} />
          </li>
          {/* <li>
            <FontAwesomeIcon className="" icon={faDatabase} />
          </li> */}
        </ul>
      </article>

      <article>
        <h3>Herramientas</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="github" icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon className="git" icon={faGitAlt} />
          </li>
          <li>
            <FontAwesomeIcon className="npm" icon={faNpm} />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Items_Tecnologias;
