import React from "react";
import { useNavigate } from "react-router-dom";

const setores = [
  "Marketing",
  "Comercial",
  "Design",
  "Call Center",
  "Administração",
  //"Pesquisa",
  "Redes Sociais",
  "Mercado",
  "Promoções",
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleSetorClick = (setor: string) => {
    navigate(`/setor/${setor}`);
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{ marginBottom: "20px", textAlign: "center", fontFamily:"Roboto"  }}>
        <h1>INDICADORES</h1>
        <h2>DCM</h2>
      </header>

      <main style={{ flex: "1" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {setores.map((setor) => (
            <button
              key={setor}
              onClick={() => handleSetorClick(setor)}
              style={{
                padding: "20px",
                textAlign: "center",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "#007BFF", // Azul
                color: "white", // Texto branco
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`icons/${setor.toLowerCase().replace(/ /g, "_")}.svg`}
                alt={setor}
                style={{ width: "50px", height: "50px", marginBottom: "10px" }}
              />
              <p style={{ margin: 0 }}>{setor}</p>
            </button>
          ))}
        </div>
      </main>

      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="images/footer_logo.svg"
          alt="Rodapé"
          style={{ width: "400px", height: "auto", marginTop: "10px" }}
        />
      </footer>
    </div>
  );
};

export default Dashboard;
