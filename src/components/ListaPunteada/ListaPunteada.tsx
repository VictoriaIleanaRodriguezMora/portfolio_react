// import React from "react";
import "./ListaPunteada.css";

const ListaPunteada = () => {
  return (
    <>
      <div className="contenedor">
        <aside>
          <div className="contenedor-temario" id="temario">
            <h3 className="titulo">Temario</h3>
            <ul className="lista">
              <li className="activo">
                <a href="#1">1. Primer Capítulo Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#2">2. Segundo Capítulo Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#3">3. Tercer Capítulo Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#4">4. Cuarto Capítulo Lorem ipsum dolor sit amet.</a>
              </li>
              <li>
                <a href="#5">5. Quinto Capítulo Lorem ipsum dolor sit amet.</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ListaPunteada;
