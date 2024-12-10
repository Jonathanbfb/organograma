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

const Marketing: React.FC = () => {
  const navigate = useNavigate();

  const data = [
    { indicadores: "Campanhas ativas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 2, sesi: 4, senai: 3, iel: 3 }, dez: { fieam: 2, sesi: 4, senai: 3, iel: 3 }, acumulado: 12 },
    { indicadores: "Roteiro de vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: { fieam: 1, sesi: 25, senai: 3, iel: 2 }, dez: { fieam: 1, sesi: 25, senai: 3, iel: 2 }, acumulado: 31 },
    { indicadores: "Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Revisão de Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Revisão de Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Espelho das Peças Concluídos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Stories", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Flyers", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Textos/ Copies", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Publicação nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Resposta de comentários nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Contas Alcançadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Impressões", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Interações (curtidas, engajamento, compartilhamento e salvamentos)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Taxa de engajamento", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },
    { indicadores: "Crescimento de Seguidores", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", acumulado: "-" },

  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Botão de voltar */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
        style={{ marginBottom: "20px" }}
      >
        Voltar
      </Button>

      <Typography variant="h4" gutterBottom>
        Setor: Marketing
      </Typography>

      {/* Tabela */}
      <Paper sx={{ marginTop: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={1}>
                  Indicadores
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Jan
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Fev
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Mar
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Abr
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Mai
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Jun
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Jul
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Ago
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Set
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Out
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  Nov
                </TableCell>
                <TableCell align="center" colSpan={4}>
                  Dez
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Acum.
                </TableCell>
              </TableRow>
              <TableRow>
                {/* Subcabeçalhos */}
                <TableCell align="center">Instituição</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">-</TableCell>
                <TableCell align="center">FIEAM</TableCell>
                <TableCell align="center">SESI</TableCell>
                <TableCell align="center">SENAI</TableCell>
                <TableCell align="center">IEL</TableCell>
                <TableCell align="center">FIEAM</TableCell>
                <TableCell align="center">SESI</TableCell>
                <TableCell align="center">SENAI</TableCell>
                <TableCell align="center">IEL</TableCell>
                <TableCell align="center">-</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
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
                  <TableCell align="center">{row.nov.fieam}</TableCell>
                  <TableCell align="center">{row.nov.sesi}</TableCell>
                  <TableCell align="center">{row.nov.senai}</TableCell>
                  <TableCell align="center">{row.nov.iel}</TableCell>
                  <TableCell align="center">{row.dez.fieam}</TableCell>
                  <TableCell align="center">{row.dez.sesi}</TableCell>
                  <TableCell align="center">{row.dez.senai}</TableCell>
                  <TableCell align="center">{row.dez.iel}</TableCell>
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

export default Marketing;
