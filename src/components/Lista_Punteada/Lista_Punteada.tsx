// import React from "react";
import "./Lista_Punteada.css";
import Lista_Punteada_Contenedor_Item from "./Lista_Punteada_Contenedor_List/Lista_Punteada_Contenedor_List";

const Lista_Punteada = () => {
  return (
    <>
      <section id="experiencia" className="experiencia">
        <div>
          <h3 className="experiencia-title">WORK EXPERIENCE</h3>
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Docente en Programacion Front End"
            duracion_prop="Abril 2022 - Abril 2023"
            empresa_prop="Plataforma 5"
          />

          <Lista_Punteada_Contenedor_Item
            posicion_prop="Tutora en Programacion Front End & Back End"
            duracion_prop="Abril 2023 - Diciembre 2023"
            empresa_prop="Universidad Tres de Febrero"
          />
        </div>
      </section>
    </>
  );
};

export default Lista_Punteada;
