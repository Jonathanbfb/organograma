import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App"; // Certifique-se de que o App ainda seja o ponto central

// Criação de tema do Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul padrão
    },
    secondary: {
      main: "#dc004e", // Vermelho
    },
  },
});

// Inicialização do ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reseta os estilos padrão */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
