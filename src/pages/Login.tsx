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
  useMediaQuery,
} from "@mui/material";
import { Campaign, Group, AdminPanelSettings, DesignServices, TrendingUp, Insights } from "@mui/icons-material";
import logo from "../assets/logo.png";
import fieam from "../assets/fieam.png";

interface LoginProps {
  onLogin: (username: string, password: string) => boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarType, setSnackbarType] = useState<"success" | "error">("success");

  const isMobile = useMediaQuery("(max-width: 600px)"); // Detecta tela pequena

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
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
      {/* Menu lateral */}
      <Grid
        item
        xs={isMobile ? 1 : 2} // Reduzido em telas pequenas
        style={{
          backgroundColor: "#1976d2",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          alignItems: "center",
          border: "4px solid white", // Borda branca
           borderRadius: "8px", // Bordas arredondadas
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)", // Efeito 3D
          
        }}
      >
        {!isMobile && (
          <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#fff" }}>
            LINKS DE CADASTRO
          </Typography>
        )}
        <List>
          {links.map((link, index) => (
            <ListItem
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", padding: "8px", justifyContent: isMobile ? "center" : "flex-start" }}
            >
              <ListItemIcon style={{ color: "#fff", minWidth: "36px" }}>
                {link.icon}
              </ListItemIcon>
              {!isMobile && <ListItemText primary={link.name} />}
            </ListItem>
          ))}
        </List>
      </Grid>

      {/* Conteúdo principal */}
      <Grid item xs={isMobile ? 11 : 10} style={{ position: "relative", display: "flex" }}>
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
            borderRadius: "8px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            zIndex: 1,
            margin: "auto",
            maxWidth: "320px",
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            Seja Bem-Vindo à DCM!
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Usuário"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ backgroundColor: "#f9f9f9", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: "#f9f9f9", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="16px">
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Entrar
              </Button>
            </Box>
          </form>

          {/* Logo FIEAM */}
          <Box marginTop="20px" style={{ textAlign: "center" }}>
            <img src={fieam} alt="Logo FIEAM" style={{ maxWidth: "60px", height: "auto" }} />
          </Box>
          <Typography variant="caption" display="block" color="textSecondary" align="center" style={{ marginTop: "8px" }}>
            © 2025 Superintendência Corporativa (SUCOR)
          </Typography>
        </Grid>
      </Grid>

      {/* Snackbar */}
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
