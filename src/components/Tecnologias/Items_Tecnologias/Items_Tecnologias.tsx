import "../../../sass/index.scss";
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
import Lista_Tecnologias from "./Lista_Tecnologias/Lista_Tecnologias";
import Lista_Item from "./Lista_Tecnologias/Lista_Item/Lista_Item";

const Items_Tecnologias = () => {
  return (
    <section id="Items_Tecnologias">
      <article>
        <h3>Front End</h3>
        <Lista_Tecnologias>
          <Lista_Item className_item="css" icon_item={faCss3} span_item="CSS" />
          <Lista_Item className_item="html" icon_item={faHtml5} span_item="HTML" />
          <Lista_Item className_item="sass" icon_item={faSass} span_item="Sass" />
          <Lista_Item className_item="js" icon_item={faJsSquare} span_item="JavaScript" />
          <Lista_Item className_item="react" icon_item={faReact} span_item="React" />
        </Lista_Tecnologias>
      </article>

      <article>
        <h3>Back End</h3>
        <Lista_Tecnologias>
          <Lista_Item className_item="node" icon_item={faNode} span_item="Node" />
          <Lista_Item className_item="mongo" icon_item={faLeaf} span_item="Mongo DB" />
          <Lista_Item className_item="sass" icon_item={faSass} span_item="Sass" />
          <Lista_Item className_item="mysql" icon_item={faDatabase} span_item="MySQL" />
        </Lista_Tecnologias>
      </article>

      <article>
        <h3>Herramientas</h3>
        <Lista_Tecnologias>
          <Lista_Item className_item="git" icon_item={faGitAlt} span_item="Git" />
          <Lista_Item className_item="github" icon_item={faGithub} span_item="Github" />
          <Lista_Item className_item="mongo" icon_item={faLeaf} span_item="Mongo DB" />
          <Lista_Item className_item="npm" icon_item={faNpm} span_item="Npm" />
        </Lista_Tecnologias>
      </article>
    </section>
  );
};

export default Items_Tecnologias;
