import "../../sass/index.scss";
import Estudios_Contenedor from "./Estudios_Contenedor/Estudios_Contenedor";

const Estudios = () => {
  return (
    <>
      <section id="experiencia" className="experiencia">
        <div>
          <h2 className="experiencia-title">ESTUDIOS</h2>

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web"
            fecha_prop="Marzo 2022"
            empresa_prop="Coder House"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web - Nivel 1"
            fecha_prop="Julio 2020"
            empresa_prop="Aprende Programando"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web - Nivel 2"
            fecha_prop="Noviembre 2020"
            empresa_prop="Aprende Programando"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Curso Introductorio de Programación"
            fecha_prop="Febrero 2022"
            empresa_prop="Plataforma 5 - Coding Bootcamp"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web - Nivel 4"
            fecha_prop="Julio 2022"
            empresa_prop="Aprende Programando"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="React"
            fecha_prop="Julio 2022"
            empresa_prop="Coder House"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Back End"
            fecha_prop="Marzo 2023"
            empresa_prop="Coder House"
            contenidos_prop={[""]}
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="SQL"
            fecha_prop="Marzo 2023"
            empresa_prop="Coder House"
            contenidos_prop={[""]}
          />
        </div>
      </section>
    </>
  );
};

export default Estudios;
