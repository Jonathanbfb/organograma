import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Campaign, Group, AdminPanelSettings, DesignServices, TrendingUp, Insights } from "@mui/icons-material"; // Ícones
import logo from "../assets/logo.png"; // Caminho da logo principal
import fieam from "../assets/fieam.png"; // Caminho da logo FIEAM

interface LoginProps {
  onLogin: (username: string, password: string) => boolean; // Função de login
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "error">("success");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(username, password);
    if (success) {
      setSnackbarType("success");
      setSnackbarMessage("Bem-vindo!");
    } else {
      setSnackbarType("error");
      setSnackbarMessage("Senha inválida.");
    }
    setSnackbarOpen(true); // Mostra o snackbar
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Fecha o snackbar
  };

  const links = [
    { name: "PROMOÇÕES E PROPAGANDA", url: "https://forms.office.com/r/pGScRevsc7", icon: <Campaign /> },
    { name: "REDES SOCIAIS", url: "https://forms.office.com/r/e7sCKDXEVN", icon: <Group /> },
    { name: "ADMINISTRATIVO", url: "https://forms.office.com/r/VK3HVbK5Z4", icon: <AdminPanelSettings /> },
    { name: "DESIGN", url: "https://forms.office.com/r/evnNDcDJud", icon: <DesignServices /> },
    { name: "MARKETING", url: "https://forms.office.com/r/WfXDjX1nBT", icon: <TrendingUp /> },
    { name: "INTELIGÊNCIA DE MERCADO", url: "https://forms.office.com/r/J8D8RftfFf", icon: <Insights /> },
  ];

  return (
    <Grid container style={{ height: "100vh", overflow: "hidden" }}>
   
    <Grid
      item
      xs={1.5} // Reduzida ainda mais
      style={{
        backgroundColor: "#90caf9", // Azul mais claro
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "8px",
      }}
    >
      <Typography
        variant="subtitle2"
        align="center"
        gutterBottom
        style={{ color: "#fff", fontSize: "0.75rem" }} // Texto menor
      >
        Links de Cadastro
      </Typography>
      <List>
        {links.map((link, index) => (
          <ListItem
            key={index}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "4px 8px" }} // Menor espaçamento
          >
            <ListItemIcon style={{ color: "#fff", minWidth: "28px" }}>
              {link.icon}
            </ListItemIcon>
            <ListItemText
              primary={link.name}
              primaryTypographyProps={{
                style: { fontSize: "0.7rem", color: "#fff" }, // Texto reduzido
              }}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  
    {/* Conteúdo principal */}
    <Grid item xs={10.5} style={{ position: "relative", display: "flex" }}>
      {/* Imagem de fundo */}
      <img
        src={logo}
        alt="Logo principal"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
  
      {/* Área de login */}
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px", // Borda arredondada
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Sombra mais forte
          zIndex: 1,
          margin: "auto", // Centralização
          maxWidth: "320px", // Largura reduzida
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Seja Bem-Vindo a DCM!
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Entrar
            </Button>
          </Box>
        </form>
  
        {/* Logo FIEAM abaixo do formulário */}
        <Box marginTop="20px" style={{ textAlign: "center" }}>
          <img
            src={fieam}
            alt="Logo FIEAM"
            style={{ maxWidth: "60px", height: "auto" }}
          />
        </Box>
        <Typography variant="caption" display="block" color="textSecondary" align="center" style={{ marginTop: "8px" }}>
          © 2025 Superintendência Corporativa (SUCOR)
        </Typography>
      </Grid>
    </Grid>
  
    {/* Snackbar para mensagens */}
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleCloseSnackbar} severity={snackbarType}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  </Grid>
  

  );
};

export default Login;
