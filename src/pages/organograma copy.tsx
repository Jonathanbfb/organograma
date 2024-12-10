import React from "react";
import { FaUserTie, FaBullhorn, FaChartBar, FaPalette, FaPhoneAlt, FaBuilding, FaStore, FaFacebook, FaBrain, FaAd } from "react-icons/fa";

const Organograma: React.FC = () => {
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

  return (
    <div style={styles.container}>
         <h1> DIRETORIA CORPORATIVA DE MARKETING</h1>
      {/* Nível 1 */}
      <div style={styles.nivel}>
                <button
                    style={styles.botao}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                                            >
            <FaUserTie style={styles.icone} />
            <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Diretor de Marketing
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Paulo Pereira
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
        >
          <FaBullhorn style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Supervisão de Marketing
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Renata Nascimento
                </h4>
                </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaChartBar style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Supervisão Comercial
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Adriana Dabela
                </h4>
                </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaPalette style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Supervisão de Design
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Mary Martins
                </h4>
                </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaPhoneAlt style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Supervisão de Call Center
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Ariana Costa
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
        >
          <FaBuilding style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Coordenação de Administração
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Edivalda Martins
                </h4>
                </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaStore style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Coordenação de Pesquisa de Mercado
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
        >
          <FaFacebook style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Coordenação de Redes Sociais
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
               Diego Nobre
                </h4>
                </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaBrain style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Coordenação de Inteligência de Mercado
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Lidiane Laborda
                </h4>
                </div>
        </button>
        <button
          style={styles.botao}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FaAd style={styles.icone} />
          <div style={{ textAlign: "center", lineHeight: "1.2" }}>
                <h3 style={{ fontWeight: "bold", margin: "5px 0", fontSize: "24px" }}>
                Coordenação de Promoções e Propaganda
                </h3>
                <h4 style={{ fontWeight: "normal", margin: "5px 0", fontSize: "16px" }}>
                Etienne Lopes
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
