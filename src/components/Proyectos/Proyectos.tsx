import Proyectos_Lista from "./Proyectos_Lista/Proyectos_Lista";

const Proyectos = () => {
  return (
    <section id="proyectos" >
      <h2>TECNOLOGIAS</h2>
      <div>
        <article>
          {/* Proyecto 1 */}
          <Proyectos_Lista
            project_link={"project_link"}
            project_description={"project_description"}
            project_title={"project_title"}
          />
        </article>

        {/* Proyecto 2 */}
        <article>
          <Proyectos_Lista
            project_link={"project_link"}
            project_description={"project_description"}
            project_title={"project_title"}
          />
        </article>

        {/* Proyecto 3 */}
        <article>
          <Proyectos_Lista
            project_link={"project_link"}
            project_description={"project_description"}
            project_title={"project_title"}
          />
        </article>

        {/* Proyecto 4 */}
        <article>
          <Proyectos_Lista
            project_link={"project_link"}
            project_description={"project_description"}
            project_title={"project_title"}
          />
        </article>
      </div>
    </section>
  );
};

export default Proyectos;
