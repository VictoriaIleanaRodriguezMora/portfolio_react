import Proyectos_Lista from "./Proyectos_Lista/Proyectos_Lista";

const Proyectos = () => {
  return (
    <section>
      <h2>TECNOLOGIAS</h2>
      <div>
        <Proyectos_Lista
          project_link={"project_link"}
          project_description={"project_description"}
          project_title={"project_title"}
        />
      </div>
    </section>
  );
};

export default Proyectos;
