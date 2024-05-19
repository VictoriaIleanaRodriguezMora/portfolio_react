import Items_Tecnologias from './Items_Tecnologias/Items_Tecnologias'
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

const Tecnologias = () => {
  return (
    <section id="Items_Tecnologias">
      <h2>TECNOLOGIAS</h2>
      <div>
        <Items_Tecnologias
          titulo_tecnologias={"Front End"}
          className_item={["css", "html", "sass", "js", "react"]}
          icon_item={[faCss3, faHtml5, faSass, faJsSquare, faReact]}
          span_item={["CSS", "HTML", "Sass", "JavaScript", "React"]}
        />

        <Items_Tecnologias
          titulo_tecnologias={"Back End"}
          className_item={["mongo", "mysql", "node"]}
          icon_item={[faLeaf, faDatabase, faNode]}
          span_item={["Mongo DB", "Mysql", "Node"]}
        />

        <Items_Tecnologias
          titulo_tecnologias={"Herramientas"}
          className_item={["git", "github", "npm"]}
          icon_item={[faGitAlt, faGithub, faNpm]}
          span_item={["Git", "Github", "Npm"]}
        />

      </div>
    </section>
  )
}

export default Tecnologias