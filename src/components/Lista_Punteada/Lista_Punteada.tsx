// import React from "react";
import "./Lista_Punteada.css";
import Lista_Punteada_Contenedor_Item from "./Lista_Punteada_Contenedor_List/Lista_Punteada_Contenedor_List";

const Lista_Punteada = () => {
  return (
    <>
      <section id="experiencia" className="experiencia">
        <div>
          <h3 className="experiencia-title">EXPERIENCIA DE TRABAJO</h3>

          {/* # 1 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Desarrolladora Front End & Analista Funcional"
            duracion_prop="NOV 2023 - Actualidad"
            empresa_prop="Gobierno de la Ciudad de Buenos Aires"
          />

          {/* # 2 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Tutora en Programacion Front End & Back End"
            duracion_prop="ABR 2023 - DIC 2023"
            empresa_prop="Universidad Nacional Tres de Febrero"
          />

          {/* # 3 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Tutora en Programacion Back End"
            duracion_prop="MAYO 2023 - DIC 2023"
            empresa_prop="Coder House"
          />

          {/* # 4 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Docente en Programacion Front End"
            duracion_prop="ABR 2022 - ABR 2023"
            empresa_prop="Plataforma 5 - Coding Bootcamp"
          />

          {/* # 5 */}
          <Lista_Punteada_Contenedor_Item
            posicion_prop="Desarrolladora Web Js"
            duracion_prop="ENE 2021 - ABR 2022"
            empresa_prop="Desarrolladora Web Freelancer"
          />
        </div>
      </section>
    </>
  );
};

export default Lista_Punteada;
