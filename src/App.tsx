import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Marketing from "./pages/setores/Marketing.tsx";
import Comercial from "./pages/setores/Comercial.tsx";
import Design from "./pages/setores/Design";
import CallCenter from "./pages/setores/CallCenter.tsx";
import Administracao from "./pages/setores/Administracao";
//import Pesquisa from "./pages/setores/Pesquisa";
import RedesSociais from "./pages/setores/RedesSociais";
import Mercado from "./pages/setores/Mercado";
import Promocoes from "./pages/setores/Promocoes";
import Dashboard from "./pages/Dashboard.tsx";
import Geral from "./pages/setores/Geral.tsx";
import Indicadores from "./pages/setores/components/Indicadores.tsx";

interface User {
  username: string;
  password: string;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const users: User[] = [
    { username: "admin", password: "10203040" },
    { username: "jonathan.barros", password: "10203040" },
    { username: "danielle.sa", password: "10203040" },
    { username: "paulo.pereira", password: "10203040" },
    { username: "lidiane.cardoso", password: "10203040" },
    { username: "renata.nascimento", password: "10203040" },
    { username: "mary.martins", password: "10203040" },
    { username: "diego.nobre", password: "10203040" },
    { username: "etienne.lopes", password: "10203040" },
    { username: "ariana.costa", password: "10203040" },
    { username: "edivalda.martins", password: "10203040" },
    { username: "adriana.almeida", password: "10203040" },
  
  ];

  const handleLogin = (username: string, password: string): boolean => {
    const user = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      return true;
    } else {

      alert("Credenciais inválidas");
      return false;
    }
  };
  return (
    <Router basename="/indicadores">
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Indicadores />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="/pages/Dashboard" element={<Dashboard />} />
        <Route path="/setor/Marketing" element={<Marketing />} />
        <Route path="/setor/Comercial" element={<Comercial />} />
        <Route path="/setor/Design" element={<Design />} />
        <Route path="/setor/CallCenter" element={<CallCenter />} />
        <Route path="/setor/Administracao" element={<Administracao />} />
        {/* <Route path="/setor/Pesquisa" element={<Pesquisa />} /> */}
        <Route path="/setor/RedesSociais" element={<RedesSociais />} />
        <Route path="/setor/Mercado" element={<Mercado />} />
        <Route path="/setor/Promocoes" element={<Promocoes />} />
        <Route path="/setor/Geral" element={<Geral />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
export default App;