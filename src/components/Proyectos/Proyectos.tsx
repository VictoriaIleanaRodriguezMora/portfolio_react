import Proyectos_Lista from "./Proyectos_Lista/Proyectos_Lista";
import {
  // faGithub,
  // faGitAlt,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faNode,
  // faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Proyectos = () => {
  return (
    <section id="proyectos" >
      <h2>PROYECTOS</h2>
      <div>
        <article>
          {/* Proyecto 1 */}
          <Proyectos_Lista
            project_title={"Marvel"}
            project_description={"project_description"}
            project_icon={[faHtml5, faCss3, faSass, faJsSquare]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/Marvell.git"}
            project_deploy_link="https://marvell.vercel.app/"
            project_item_className={["html", "css", "sass", "js"]}
          />
        </article>

        {/* Proyecto 2 */}
        <article>
          
          <Proyectos_Lista
            project_title={"React Ecommerce"}
            project_description={"project_description"}
            project_icon={[faCss3, faSass, faReact]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/react-ecommerce.git"}
            project_deploy_link="https://react-ecommerce-virm.vercel.app/"
            project_item_className={["css", "sass", "react"]}
          />
        </article>

        {/* Proyecto 3 */}
        <article>
          <Proyectos_Lista
            project_title={"Back End"}
            project_description={"project_description"}
            project_icon={[faSass, faNode, faLeaf]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/BackEndNode.git"}
            project_item_className={["sass", "node", "mongo"]}
          />
        </article>

        {/* Proyecto 4 */}
        <article>
          <Proyectos_Lista
            project_title={"Base de Datos"}
            project_description={"Pensado y desarrollado en base a las necesidades de un torneo deportivo."}
            project_icon={[faDatabase]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/sql_torneo_deportivo.git"}
            project_item_className={["mysql"]}
          />
        </article>
      </div>
    </section>
  );
};

export default Proyectos;
