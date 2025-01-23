import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
import styles from "./organogramaStyles";
import Sidebar from "./Sidebar";

const indicadores: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ ...styles.container, paddingTop: "0", marginTop: "0" }}>
        <div style={{ marginBottom: "8px", marginTop: "0" }}>
          <Header title="DIRETORIA CORPORATIVA DE MARKETING" />
          <h2 style={{ margin: "0", padding: "0", fontSize: "20px",textAlign:"center" }}>
            PAINEL DE INDICADORES
          </h2>
        </div>

        {/* Nível 1 */}
        <div style={styles.nivel}>
          <Button
            labelHeading="Diretoria de Marketing"
            labelSubheading="Diretor: Paulo Pereira"
            onClick={() => handleNavigate("/setor/Geral")}
          />
        </div>

        {/* Nível 2 */}
        <div style={styles.nivel}>
          <Button
            labelHeading="Setor Comercial"
            labelSubheading="Supervisora: Adriana Dabela"
            onClick={() => handleNavigate("/setor/Comercial")}
          />
          <Button
            labelHeading="Setor Call Center"
            labelSubheading="Supervisora: Ariana Costa"
            onClick={() => handleNavigate("/setor/CallCenter")}
          />
          <Button
            labelHeading="Setor de Marketing"
            labelSubheading="Supervisora: Renata Nascimento"
            onClick={() => handleNavigate("/setor/Marketing")}
          />
          <Button
            labelHeading="Setor de Design"
            labelSubheading="Supervisora: Mary Martins"
            onClick={() => handleNavigate("/setor/Design")}
          />
        </div>

        {/* Nível 3 */}
        <div style={styles.nivel}>
          <Button
            labelHeading="Setor Administrativo"
            labelSubheading="Coordenadora: Edivalda Martins"
            onClick={() => handleNavigate("/setor/Administracao")}
          />
          <Button
            labelHeading="Setor Pesquisa de Mercado"
            labelSubheading=""
            onClick={() => handleNavigate("/setor/Pesquisa")}
          />
          <Button
            labelHeading="Setor Redes Sociais"
            labelSubheading="Coordenador: Diego Nobre"
            onClick={() => handleNavigate("/setor/RedesSociais")}
          />
          <Button
            labelHeading="Setor Inteligência de Mercado"
            labelSubheading="Coordenadora: Lidiane Laborda"
            onClick={() => handleNavigate("/setor/Mercado")}
          />
          <Button
            labelHeading="Setor Promoções e Propaganda"
            labelSubheading="Coordenadora: Etienne Lopes"
            onClick={() => handleNavigate("/setor/Promocoes")}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default indicadores;