import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import {
  Page_Estudios,
  Page_Experiencia_De_Trabajo,
  Page_Proyectos,
  Page_SobreMi,
  Page_Tecnologias,
} from "./pages/Pages";

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
            <Route path="/tecnologias/" element={<Page_Tecnologias />} />

            {/* /proyectos/ */}
            <Route path="/proyectos/" element={<Page_Proyectos />} />

            {/* /estudios/ */}
            <Route path="/estudios/" element={<Page_Estudios />} />

            {/* /sobre-mi/ */}
            <Route path="/sobre-mi/" element={<Page_SobreMi />} />
            
          </Routes>
          <Page_Experiencia_De_Trabajo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
