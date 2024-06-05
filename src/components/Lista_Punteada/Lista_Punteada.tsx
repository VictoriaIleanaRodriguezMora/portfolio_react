import "../../sass/index.scss";
import Lista_Punteada_Contenedor_Item from "./Lista_Punteada_Contenedor_List/Lista_Punteada_Contenedor_List";

const Lista_Punteada = () => {
  return (
    <>
      <section id="experiencia" className="experiencia">
        <div>
          <h2 className="experiencia-title">EXPERIENCIA DE TRABAJO</h2>

          {/* # 1 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Desarrolladora Front End & Analista Funcional"
            duracion_prop="NOV 2023 - Actualidad"
            empresa_prop="Gobierno de la Ciudad de Buenos Aires"
            contenidos_prop={["Cómo Analista Funcional mi rol es evaluar y comprender los requerimientos técnicos y funcionales de cada proyecto, crear y mantener documentación.", "Cómo Desarrolladora Front End trabajo en conjunto con un equipo de desarrolladores, los cúales le damos soporte, mantenimiento y nuevas funcionalidades a la Librería 'Obelisco' (Open Source)."]}
          />

          {/* # 2 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Tutora en Programacion Front End & Back End"
            duracion_prop="ABR 2023 - DIC 2023"
            empresa_prop="Universidad Nacional Tres de Febrero"
            contenidos_prop={["Responsable de corregir los proyectos finales de mis estudiantes en 3 comisiones a cargo.", "Responder dudas fuera del horario de clase.", "Participar activamente en las clases en vivo."]}
          />

          {/* # 3 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Tutora en Programacion Back End"
            duracion_prop="MAYO 2023 - DIC 2023"
            empresa_prop="Coder House"
            contenidos_prop={["Responsable de corregir semana a semana las entregas de mis estudiantes a cargo.", "Responder dudas fuera del horario de clase.", "Participar activamente en las clases en vivo."]}
          />

          {/* # 4 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Docente en Programacion Front End"
            duracion_prop="ABR 2022 - ABR 2023"
            empresa_prop="Plataforma 5 - Coding Bootcamp"
            contenidos_prop={["A cargo del dictado de las clases de HTML, CSS y JavaScript."]}
          />

          {/* # 5 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Desarrolladora Web Js"
            duracion_prop="ENE 2021 - ABR 2022"
            empresa_prop="Desarrolladora Web Freelancer"
            contenidos_prop={["Desarrolladora Web Freelancer."]}
          />
        </div>
      </section>
    </>
  );
};

export default Lista_Punteada;
