import React from "react";
import { useNavigate } from "react-router-dom";
//import "../App.css";

const Organograma: React.FC = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      margin: "20px",
    },
    nivel: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0",
    },
    botao: {
      backgroundColor: "blue",
      border: "none",
      color: "white",
      width: "300px",
      height: "150px",
      margin: "5px",
      borderRadius: "8px",
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.3s ease",
    },
    botaoHover: {
      backgroundColor: "#003d99",
    },
    icone: {
      fontSize: "30px",
      marginBottom: "5px",
    },
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.botaoHover.backgroundColor!;
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = styles.botao.backgroundColor!;
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <h1 className="header-title">DIRETORIA CORPORATIVA DE MARKETING</h1>
      {/* Nível 1 */}
      <div style={styles.nivel}>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => alert("Indicadores Geral do setor, EM BREVE")}
        >
         {/* // <FaUserTie style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Diretoria de Marketing
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Diretor: Paulo Pereira
            </h4>
          </div>
        </button>
      </div>

      {/* Nível 2 */}
      <div style={styles.nivel}>

      <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Comercial")}
        >
         {/* // <FaChartBar style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Comercial
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
             Supervisora: Adriana Dabela
            </h4>
          </div>
        </button>

        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Call Center")}
        >
          {/* //<FaPhoneAlt style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Call Center
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Supervisora: Ariana Costa
            </h4>
          </div>
        </button>
        
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Marketing")}
        >
         {/* // <FaBullhorn style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor de Marketing
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Supervisora: Renata Nascimento
            </h4>
          </div>
        </button>
        
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Design")}
        >
         {/* // <FaPalette style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor de Design
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Supervisora: Mary Martins
            </h4>
          </div>
        </button>
       
      </div>
      {/* Nível 3 */}
      <div style={styles.nivel}>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Administração")}
        >
         {/* // <FaBuilding style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Administrativo
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Coordenadora: Edivalda Martins
            </h4>
          </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Pesquisa")}
        >
         {/* // <FaStore style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Pesquisa de Mercado
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              .
            </h4>
          </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Redes Sociais")}
        >
         {/* // <FaFacebook style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Redes Sociais
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Coordenador: Diego Nobre
            </h4>
          </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Mercado")}
        >
          {/* //<FaBrain style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Inteligência de Mercado
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Coordenadora: Lidiane Laborda
            </h4>
          </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleNavigate("/setor/Promoções")}
        >
         {/* // <FaAd style={styles.icone} /> */}
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
            <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
              Setor Promoções e Propaganda
            </h3>
            <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
              Coordenadora: Etienne Lopes
            </h4>
          </div>
        </button>
      </div>

      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="images/footer_logo.svg"
          alt="Rodapé"
          style={{ width: "500px", height: "auto", marginTop: "10px" }}
        />
      </footer>
    </div>
  );
};

export default Organograma;
