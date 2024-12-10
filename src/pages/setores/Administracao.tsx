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

const Administracao: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { indicadores: "Número de demandas de ajustes de ponto", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 20,dez: "-", acumulado: 20 },
    { indicadores: "Apontamentos consolidados (% de conclusão)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 16,dez: "-", acumulado: 16 },
    { indicadores: "Número de medições", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 15,dez: "-", acumulado: 15},
    { indicadores: "Número de conferencia de notas fiscais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 30 ,dez: "-", acumulado: 30 },
    { indicadores: "Número de cadastros CRM/Genesis", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 111,dez: "-", acumulado: 111 },
    { indicadores: "Número de contratos renovados", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 12,dez: "-", acumulado: 12 },
    { indicadores: "Número de adesões", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 14,dez: "-", acumulado: 14 },
   
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
        Setor: Coordenação de Administração
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
export default Administracao;
