import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experiencia_De_Trabajo from "./pages/Experiencia_De_Trabajo";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/experiencia-de-trabajo" element={<Experiencia_De_Trabajo />} />
          </Routes>
            <Experiencia_De_Trabajo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
