import Lista_Punteada from "../components/Lista_Punteada/Lista_Punteada";

const Page_Experiencia_De_Trabajo = () => {
  return (
    <Lista_Punteada
      title_h2="EXPERIENCIA DE TRABAJO"
      items={[
        {
          posicion_prop: "Desarrolladora Front End & Analista Funcional",
          duracion_prop: "NOV 2023 - Actualidad",
          empresa_prop: "Gobierno de la Ciudad de Buenos Aires",
          contenidos_prop: [
            "Cómo Analista Funcional mi rol es evaluar y comprender los requerimientos técnicos y funcionales de cada proyecto, crear y mantener documentación.",
            "Cómo Desarrolladora Front End trabajo en conjunto con un equipo de desarrolladores, los cúales le damos soporte, mantenimiento y nuevas funcionalidades a la Librería 'Obelisco' (Open Source)."
          ]
        },
        {
          posicion_prop: "Tutora en Programacion Front End & Back End",
          duracion_prop: "ABR 2023 - DIC 2023",
          empresa_prop: "Universidad Nacional Tres de Febrero",
          contenidos_prop: ["Responsable de corregir los proyectos finales de mis estudiantes en 3 comisiones a cargo.", "Responder dudas fuera del horario de clase.", "Participar activamente en las clases en vivo."]
        },
        {
          posicion_prop: "Tutora en Programacion Back End",
          duracion_prop: "MAYO 2023 - DIC 2023",
          empresa_prop: "Universidad Nacional Tres de Febrero",
          contenidos_prop: ["Responsable de corregir semana a semana las entregas de mis estudiantes a cargo.", "Responder dudas fuera del horario de clase.", "Participar activamente en las clases en vivo."]
        },
        {
          posicion_prop: "Docente en Programacion Front End",
          duracion_prop: "ABR 2022 - ABR 2023",
          empresa_prop: "Plataforma 5 - Coding Bootcamp",
          contenidos_prop: ["A cargo del dictado de las clases de HTML, CSS y JavaScript."]
        }
        ,
        {
          posicion_prop: "Desarrolladora Web Js",
          duracion_prop: "ENE 2021 - ABR 2022",
          empresa_prop: "Desarrolladora Web Freelancer",
          contenidos_prop: ["Desarrolladora Web Freelancer."]
        }
      ]}
    />
  );
};

export default Page_Experiencia_De_Trabajo;
