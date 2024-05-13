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
  faNodeJs,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Items_Tecnologias = () => {
  return (
    <section id="Items_Tecnologias">
      <article>
        <h3>Front End</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="dev css" icon={faCss3} />
            <span> CSS </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev html" icon={faHtml5} />
            <span> HTML </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev js" icon={faJsSquare} />
            <span> JavaScript </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev react" icon={faReact} />
            <span> React </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev sass" icon={faSass} />
            <span> Sass </span>
          </li>
        </ul>
      </article>

      <article>
        <h3>Back End</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="dev node" icon={faNodeJs} />
            <span> Node </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev mongo" icon={faLeaf} />
            <span> Mongo DB </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev mysql" icon={faDatabase} />
            <span> MySQL</span>
          </li>
        </ul>
      </article>

      <article>
        <h3>Herramientas</h3>
        <ul>
          <li>
            <FontAwesomeIcon className="dev git" icon={faGitAlt} />
            <span> Git </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev github" icon={faGithub} />
            <span> Github </span>
          </li>
          <li>
            <FontAwesomeIcon className="dev npm" icon={faNpm} />
            <span> NPM </span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Items_Tecnologias;
