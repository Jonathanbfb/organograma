import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

// Definir os tipos corretamente
interface DataRow {
  indicadores: string;
  jan: string;
  fev: string;
  mar: string;
  abr: string;
  mai: string;
  jun: string;
  jul: string;
  ago: string;
  set: string;
  out: string;
  nov: {
    fieam: number;
    sesi: number;
    senai: number;
    iel: number;
  };
  acumulado: number;
}

const Design: React.FC = () => {
  const navigate = useNavigate();

  const data: DataRow[] = [
    { indicadores: "Campanhas ativas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 2, sesi: 4, senai: 3, iel: 3 }, acumulado: 12 },
    { indicadores: "Roteiro de vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 1, sesi: 25, senai: 3, iel: 2 }, acumulado: 31 },
    { indicadores: "Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 1, sesi: 25, senai: 3, iel: 2 }, acumulado: 31 },
    { indicadores: "Revisão de Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 1, sesi: 25, senai: 3, iel: 2 }, acumulado: 31 },
    { indicadores: "Revisão de Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 14, sesi: 31, senai: 23, iel: 18 }, acumulado: 86 },
    { indicadores: "Espelho das Peças Concluídos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 14, sesi: 31, senai: 23, iel: 18 }, acumulado: 86 },
    { indicadores: "Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 14, sesi: 31, senai: 23, iel: 18 }, acumulado: 86 },
    { indicadores: "Stories", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 16, sesi: 131, senai: 23, iel: 36 }, acumulado: 206 },
    { indicadores: "Flyers", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 12, senai: "-", iel: "-" }, acumulado: "-" },
    { indicadores: "Textos/ Copies", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 15, sesi: 56, senai: 26, iel: 20 }, acumulado: 117 },
    { indicadores: "Publicação nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 45, sesi: 168, senai: 78, iel: 60 }, acumulado: 351 },
    { indicadores: "Resposta de comentários nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 221, senai: 104, iel: 42 }, acumulado: 367 },
    { indicadores: "Contas Alcançadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 34760, sesi: 329397, senai: 118503, iel: 81543 }, acumulado: 564203 },
    { indicadores: "Impressões", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 10473, sesi: 1590735, senai: 673674, iel: 15526 }, acumulado: 2290408 },
    { indicadores: "Interações (curtidas, engajamento, compartilhamento e salvamentos)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 1219, sesi: 17014, senai: 5462, iel: 2291 }, acumulado: 25986 },
    { indicadores: "Taxa de engajamento", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 587, sesi: 6217, senai: 2954, iel: 1159 }, acumulado: 10917 },
    { indicadores: "Crescimento de Seguidores", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 243, sesi: 1563, senai: 563, iel: 180 }, acumulado: 2549 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/organograma")}
        style={{ marginBottom: "20px" }}
      >
        Voltar
      </Button>

      <Typography variant="h4" gutterBottom>
        Setor: Marketing
      </Typography>

      <Paper sx={{ marginTop: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={1}
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#ADD8E6",
                    padding: "4px 8px", // Reduz o padding
                    minWidth: "150px",  // Reduz a largura mínima
                  }}
                >
                  Indicadores
                </TableCell>
                {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"].map((month, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ADD8E6",
                      padding: "4px 8px", // Reduz o padding
                      minWidth: "60px",  // Reduz a largura mínima
                    }}
                  >
                    {month}
                  </TableCell>
                ))}
                <TableCell
                  align="center"
                  colSpan={4}
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#4682B4",
                    color: "white",
                    padding: "4px 8px", // Reduz o padding
                    minWidth: "60px",  // Reduz a largura mínima
                  }}
                >
                  Instituição
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    fontWeight: "bold",
                    padding: "4px 8px", // Reduz o padding
                    minWidth: "60px",  // Reduz a largura mínima
                  }}
                >
                  Acumulado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& .MuiTableCell-root": { padding: "4px 8px" }, // Reduz o padding nas células
                    height: "32px", // Reduz a altura da linha
                  }}
                >
                  <TableCell>{row.indicadores}</TableCell>
                  <TableCell align="center">{row.jan}</TableCell>
                  <TableCell align="center">{row.fev}</TableCell>
                  <TableCell align="center">{row.mar}</TableCell>
                  <TableCell align="center">{row.abr}</TableCell>
                  <TableCell align="center">{row.mai}</TableCell>
                  <TableCell align="center">{row.jun}</TableCell>
                  <TableCell align="center">{row.jul}</TableCell>
                  <TableCell align="center">{row.ago}</TableCell>
                  <TableCell align="center">{row.set}</TableCell>
                  <TableCell align="center">{row.out}</TableCell>
                  {["nov"].flatMap((month) =>
                    ["fieam", "sesi", "senai", "iel"].map((key, subIndex) => (
                      <TableCell key={subIndex} align="center">
                        {row[month as keyof typeof row]?.[key as keyof typeof row[typeof month]] || "-"}
                      </TableCell>
                    ))
                  )}
                  <TableCell align="center">{row.acumulado}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Design;

