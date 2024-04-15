// import React from "react";
import "./Lista_Punteada.css";
import Lista_Punteada_Contenedor_List from "./Lista_Punteada_Contenedor_List/Lista_Punteada_Contenedor_List";

const Lista_Punteada = () => {
  return (
    <>
      <section id="experiencia" className="experiencia">
        <div>
          <h3 className="experiencia-title">WORK EXPERIENCE</h3>
          <Lista_Punteada_Contenedor_List
            posicion_prop="Docente en Programacion Front End"
            duracion_prop="Abril 2022 - Abril 2023"
            empresa_prop="Plataforma 5"
            contenido_prop={[
              { content: "Dictar las clases de HTML, CSS y JavaScript" },
              { content: "Responder consultas fuera de clase" },
            ]}
          />

          <Lista_Punteada_Contenedor_List
            posicion_prop="Tutora en Programacion Front End & Back End"
            duracion_prop="Abril 2023 - Diciembre 2023"
            empresa_prop="Universidad Tres de Febrero"
            contenido_prop={[
              { content: "Asistir al profesor y estudiantes durante las clases" },
              { content: "Responder consultas fuera de clase" },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Lista_Punteada;
