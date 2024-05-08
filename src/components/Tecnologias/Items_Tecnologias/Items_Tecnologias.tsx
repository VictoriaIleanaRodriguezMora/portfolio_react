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
        </ul>
      </article>

      <article>
        <h3>Back End</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faNode} />
          </li>
        </ul>
      </article>

      <article>
        <h3>Herramientas</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGitAlt} />
          </li>
          <li>
            <FontAwesomeIcon icon={faNpm} />
          </li>
          {/* <li>
            <FontAwesomeIcon icon={faDatabase} />
          </li> */}
        </ul>
      </article>
    </section>
  );
};

export default Items_Tecnologias;
