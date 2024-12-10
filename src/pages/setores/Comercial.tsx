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

const Comercial: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { indicadores: "Número de consultoras ativas por mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 9, sesi:"-", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 9 },
    { indicadores: "Número de visitas (compromissos)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 39, sesi: "-", senai:"-", iel:"-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 39 },
    { indicadores: "Propostas geradas - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 65, senai: 34, iel: 17 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 31 },
    { indicadores: "Propostas geradas - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "R$ 1.139.901,56" , senai: "R$ 413.367,95", iel: "R$ 55.236,95" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: " R$ 1.608.506,46" },
    { indicadores: "Negócios fechados - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam:  "-", sesi: 42, senai: 14, iel: 6 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 62 },
    { indicadores: "Negócios fechados - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "R$ 685.703,06", senai:"R$ 24.699,18", iel: "R$ 7.699,00" },dez: { fieam: "-", sesi:"-", senai: "-", iel: "-" }, acumulado: "R$ 718.101,24" },
    { indicadores: "Pedidos gerados - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 16, senai: 4, iel: 1 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 21 },
    { indicadores: "Pedidos gerados - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "R$ 64.608,50", senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: "R$ 64.608,50" },
    { indicadores: "Pedidos fechados - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 14, senai: "-", iel: "-" },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: "14" },
    { indicadores: "Pedidos fechados - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: "R$ 64.608,50", senai: "-", iel: 20 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: "R$ 64.608,50" },
    /* { indicadores: "Publicação nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 45, sesi: 168, senai: 78, iel: 60 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 351 },
    { indicadores: "Resposta de comentários nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: "-", sesi: 221, senai: 104, iel: 42 },dez: { fieam:"-", sesi: "-", senai: "-", iel: "-" }, acumulado: 367 },
    { indicadores: "Contas Alcançadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 34760, sesi: 329397, senai: 118503, iel: 81543 },dez: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, acumulado: 564203 },
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
export default Comercial;
