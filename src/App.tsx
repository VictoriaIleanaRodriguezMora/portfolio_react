import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page_Experiencia_De_Trabajo from "./pages/Page_Experiencia_De_Trabajo";
import Header from "./components/Header/Header";
import Page_Tecnologias from "./pages/Page_Tecnologias";
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
              element={<Page_Experiencia_De_Trabajo />}
            />

            {/* /tecnologias/ */}
            <Route
              path="/tecnologias/"
              element={<Page_Tecnologias />}
            />

            {/* proyectos */}
            <Route
              path="/tecnologias/"
              element={<Proyectos />}
            />


          </Routes>
          <Page_Experiencia_De_Trabajo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
