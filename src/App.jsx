import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePagina";
import PropertyDetailPage from "./pages/VerMas";

// Importar estilos
import "./styles/global.css";
import "./styles/components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/propiedad/:id" element={<PropertyDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
