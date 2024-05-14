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
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Items_Tecnologias = () => {
  return (
    <section id="Items_Tecnologias">
      <article>
        <h3>Front End</h3>
        <ul>
          <li className="dev_css">
            <FontAwesomeIcon className="dev css" icon={faCss3} />
            <span> CSS </span>
          </li>
          <li className="dev_html">
            <FontAwesomeIcon className="dev html" icon={faHtml5} />
            <span> HTML </span>
          </li>
          <li className="dev_sass">
            <FontAwesomeIcon className="dev sass" icon={faSass} />
            <span> Sass </span>
          </li>
          <li className="dev_js">
            <FontAwesomeIcon className="dev js" icon={faJsSquare} />
            <span> JavaScript </span>
          </li>
          <li className="dev_react">
            <FontAwesomeIcon className="dev react" icon={faReact} />
            <span> React </span>
          </li>
        </ul>
      </article>

      <article>
        <h3>Back End</h3>
        <ul>
          <li className="dev_node">
            <FontAwesomeIcon className="dev node" icon={faNode} />
            <span> Node </span>
          </li>
          <li className="dev_mongo">
            <FontAwesomeIcon className="dev mongo" icon={faLeaf} />
            <span> Mongo DB </span>
          </li>
          <li className="dev_mysql">
            <FontAwesomeIcon className="dev mysql" icon={faDatabase} />
            <span> MySQL</span>
          </li>
        </ul>
      </article>

      <article>
        <h3>Herramientas</h3>
        <ul>
          <li className="dev_git">
            <FontAwesomeIcon className="dev git" icon={faGitAlt} />
            <span> Git </span>
          </li>
          <li className="dev_github">
            <FontAwesomeIcon className="dev github" icon={faGithub} />
            <span> Github </span>
          </li>
          <li className="dev_npm">
            <FontAwesomeIcon className="dev npm" icon={faNpm} />
            <span> NPM </span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Items_Tecnologias;
