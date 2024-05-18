import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experiencia_De_Trabajo from "./pages/Experiencia_De_Trabajo";
import Header from "./components/Header/Header";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Proyectos from "./components/Proyectos/Proyectos";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* /experiencia-de-trabajo/ */}
            <Route
              path="/experiencia-de-trabajo/"
              element={<Experiencia_De_Trabajo />}
            />

            {/* /tecnologias/ */}
            <Route
              path="/tecnologias/"
              element={<Tecnologias />}
            />

            {/* proyectos */}
            <Route
              path="/tecnologias/"
              element={<Proyectos />}
            />


          </Routes>
          <Experiencia_De_Trabajo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
