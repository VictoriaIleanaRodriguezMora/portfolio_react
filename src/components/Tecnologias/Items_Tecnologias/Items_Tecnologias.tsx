import "./Items_Tecnologias.css";
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
    <section id="Items_Tecnologias">
      <article>
        <h3>Front End</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="dev css" icon={faCss3} />
          </li>
          <li>
            <FontAwesomeIcon className="dev html" icon={faHtml5} />
          </li>
          <li>
            <FontAwesomeIcon className="dev js" icon={faJsSquare} />
          </li>
          <li>
            <FontAwesomeIcon className="dev react" icon={faReact} />
          </li>
          <li>
            <FontAwesomeIcon className="dev sass" icon={faSass} />
          </li>
        </ul>
      </article>

      <article>
        <h3>Back End</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="dev node" icon={faNode} />
          </li>
          {/* <li>
            <FontAwesomeIcon className="dev " icon={faDatabase} />
          </li> */}
        </ul>
      </article>

      <article>
        <h3>Herramientas</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="dev github" icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon className="dev git" icon={faGitAlt} />
          </li>
          <li>
            <FontAwesomeIcon className="dev npm" icon={faNpm} />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Items_Tecnologias;
