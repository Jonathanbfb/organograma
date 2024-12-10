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

const Promocoes: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { indicadores: "Número de ações nas empresas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 14,dez: "-", acumulado: 14 },
    { indicadores: "Número de eventos externos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 1,dez: "-", acumulado: 1},
    { indicadores: "Qtd leads captados em ações nas empresas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 14,dez: "-", acumulado: 14},
    { indicadores: "Qtd leads captados em eventos externos (feiras)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 182 ,dez: "-", acumulado: 182 },
    { indicadores: "Nº de outdoors ativos por instituição", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: "-" },
    { indicadores: "Nº de mobiliário urbano ativo, por instituição", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: "-" },
   
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
        Setor: Coordenação de Promoções e Propaganda
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
                {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out","Nov","Dez"].map((month, index) => (
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
      <TableCell align="center">{row.nov}</TableCell>
      <TableCell align="center">{row.dez}</TableCell>
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
export default Promocoes;
