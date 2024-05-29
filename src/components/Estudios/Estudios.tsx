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
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web - Nivel 1"
            fecha_prop="Julio 2021"
            empresa_prop="Aprende Programando"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web - Nivel 2"
            fecha_prop="Noviembre 2021"
            empresa_prop="Aprende Programando"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Curso Introductorio de Programación"
            fecha_prop="Febrero 2022"
            empresa_prop="Plataforma 5 - Coding Bootcamp"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Desarrollo Web - Nivel 4"
            fecha_prop="Julio 2022"
            empresa_prop="Aprende Programando"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Curso Introductorio de Programación"
            fecha_prop="Febrero 2022"
            empresa_prop="Plataforma 5 - Coding Bootcamp"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="React"
            fecha_prop="Julio 2022"
            empresa_prop="Coder House"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="Back End"
            fecha_prop="Marzo 2023"
            empresa_prop="Coder House"
          />

          {/* # 1 */}
          <Estudios_Contenedor
            titulo_prop="SQL"
            fecha_prop="Marzo 2023"
            empresa_prop="Coder House"
          />
        </div>
      </section>
    </>
  );
};

export default Estudios;
