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

const CallCenter: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { indicadores: "Nº de atendentes ativas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 10, sesi:"-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 10 },
    { indicadores: "Atendimentos receptivos Telefone", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 2734, sesi: "-", senai:"-", iel:"-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 2734 },
    { indicadores: "Atendimentos receptivos WhatsApp", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 14250, sesi: "-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 14250 },
    { indicadores: "Atendimentos receptivos Instagram", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 728, sesi: "-" , senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 728 },
    { indicadores: "Atendimentos receptivos Facebook", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam:  95, sesi: "-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 95 },
    { indicadores: "Atendimentos receptivos E-mail", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 22, sesi: "-", senai:"-", iel: "-" },dez: { fieam: "-", sesi:"-", senai: "-", iel: "-" }, acumulado: 22 },
    { indicadores: "Atendimentos ativos Telefone", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 170, sesi: "-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 170 },
    { indicadores: "Atendimentos ativos WhatsApp", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 0 },
    { indicadores: "Atendimentos ativos E-mail", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 0 },
    { indicadores: "Atendimentos ativos Eventos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 0 },
     { indicadores: "Propostas geradas - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 1700, senai: 128, iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 1828 },
    { indicadores: "Propostas geradas - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "R$ 3.555.795,00", senai: "R$ 182.793,10", iel: "-" },dez: { fieam:"-", sesi: "-", senai: "-", iel: "-" }, acumulado:  "R$ 3.738.588,10"  },
   /* { indicadores: "Contas Alcançadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 34760, sesi: 329397, senai: 118503, iel: 81543 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 564203 },
    { indicadores: "Impressões", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 10473, sesi: 1590735, senai: 673674, iel: 15526 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 2290408 },
    { indicadores: "Interações (curtidas, engajamento, compartilhamento e salvamentos)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 1219, sesi: 17014, senai: 5462, iel: 2291 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 25986 },
    { indicadores: "Taxa de engajamento", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 587, sesi: 6217, senai: 2954, iel: 1159 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 10917 },
    { indicadores: "Crescimento de Seguidores", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 243, sesi: 1563, senai: 563, iel: 180 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 2549 },
   */ ];
  

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
        Setor: Comercial
      </Typography>

      <Paper sx={{ marginTop: "20px" }}>
        <TableContainer>
            <Table>
              <TableHead sx={{
                      "& .MuiTableRow-root": {
                        height: "30px", 
                      },
                      "& .MuiTableCell-root": {
                        padding: "4px 6px", 
                        lineHeight: "1",    
                      },
                    }}>
                <TableRow>
                <TableCell
                  rowSpan={2}
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#ADD8E6",
                    padding: "8px",
                    minWidth: "120px",
                  }}
                >
                  Indicadores
                </TableCell>
                {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"].map((month, index) => (
                  <TableCell
                    key={index}
                    rowSpan={2}
                    align="center"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#ADD8E6",
                      padding: "8px",
                      minWidth: "60px",
                    }}
                  >
                    {month}
                  </TableCell>
                ))}
                <TableCell
                  colSpan={4}
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#4682B4",
                    color: "white",
                    padding: "8px",
                  }}
                >
                  Nov
                </TableCell>
                <TableCell
                  colSpan={4}
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#4682B4",
                    color: "white",
                    padding: "8px",
                  }}
                >
                  Dez
                </TableCell>
                <TableCell
                  rowSpan={2}
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#ADD8E6",
                    padding: "8px",
                    minWidth: "80px",
                  }}
                >
                  Acumulado
                </TableCell>
              </TableRow>
              <TableRow>
                {["FIEAM", "SESI", "SENAI", "IEL"].map((name, index) => (
                  <TableCell
                    key={`nov-${index}`}
                    align="center"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#4682B4",
                      color: "white",
                      padding: "8px",
                    }}
                  >
                    {name}
                  </TableCell>
                ))}
                {["FIEAM", "SESI", "SENAI", "IEL"].map((name, index) => (
                  <TableCell
                    key={`dez-${index}`}
                    align="center"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#4682B4",
                      color: "white",
                      padding: "8px",
                    }}
                  >
                    {name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
  {data.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        "& .MuiTableCell-root": {
          padding: "4px 6px",
          lineHeight: "1",   
        },
        height: "30px",     
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

      {/* Dados para Novembro */}
      {["fieam", "sesi", "senai", "iel"].map((key) => (
        <TableCell align="center" key={key}>
          {row.nov && row.nov[key] !== undefined ? row.nov[key] : "-"}
        </TableCell>
      ))}

      {/* Dados para Dezembro */}
      {["fieam", "sesi", "senai", "iel"].map((key) => (
        <TableCell align="center" key={key}>
          {row.dez && row.dez[key] !== undefined ? row.dez[key] : "-"}
        </TableCell>
      ))}

      <TableCell align="center">{row.acumulado}</TableCell>
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <h4>Atualizado em 06/12/2024</h4>
    </div>
  );

};
export default CallCenter;
