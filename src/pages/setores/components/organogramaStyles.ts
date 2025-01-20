import { Margin } from "@mui/icons-material";
import { colors } from "@mui/material";

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
    h2:{
      Margin:"0",
      colors:"red",
    }
  };
  
  export default styles;
  