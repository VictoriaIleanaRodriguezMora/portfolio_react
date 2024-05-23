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
            project_description={"project_description"}
            project_title={"project_title_M"}
            project_icon={[faHtml5, faCss3, faSass, faJsSquare]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/Marvell.git"}
            project_deploy_link="https://marvell.vercel.app/"
          />
        </article>

        {/* Proyecto 2 */}
        <article>
          <Proyectos_Lista
            project_description={"project_description"}
            project_title={"project_title_r_e"}
            project_icon={[faCss3, faSass, faReact]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/react-ecommerce.git"}
            project_deploy_link="https://react-ecommerce-virm.vercel.app/"
          />
        </article>

        {/* Proyecto 3 */}
        <article>
          <Proyectos_Lista
            project_description={"project_description"}
            project_title={"project_title_b_n"}
            project_icon={[faNode, faSass, faLeaf]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/BackEndNode.git"}
          />
        </article>

        {/* Proyecto 4 */}
        <article>
          <Proyectos_Lista
            project_description={"project_description"}
            project_title={"project_title_sql"}
            project_icon={[faDatabase]}
            project_github_link={"https://github.com/VictoriaIleanaRodriguezMora/sql_torneo_deportivo.git"}
          />
        </article>
      </div>
    </section>
  );
};

export default Proyectos;
