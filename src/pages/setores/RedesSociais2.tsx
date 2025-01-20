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

const RedesSociais: React.FC = () => {
  const navigate = useNavigate();

  const data = [
      {
        "indicadores": "Número de anúncios",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 146, "senai": 49, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 195
      },
      {
        "indicadores": "Alcance total",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 336409, "senai": 176812, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 513221
      },
      {
        "indicadores": "Impressões (ADS)",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 1398706, "senai": 887110, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 2285816
      },
      {
        "indicadores": "Cliques no anúncio",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 14732, "senai": 9568, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 24300
      },
      {
        "indicadores": "CTR (Click-Through Rate)",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 0.0105, "senai": 0.0108, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 0.0213
      },
      {
        "indicadores": "CPC (Custo por Clique)",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 0.76, "senai": 0.98, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 1.74
      },
      {
        "indicadores": "COM (Custo por Mil Impressões)",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 9.87, "senai": 9.01, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 18.88
      },
      {
        "indicadores": "Conversões",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 2252, "senai": 1153, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 3405
      },
      {
        "indicadores": "Taxa de conversão (%)",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 0
      },
      {
        "indicadores": "CPA (Custo por Aquisição)",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 7.21, "senai": 8.15, "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 15.36
      },
      {
        "indicadores": "Qtd de E-mails enviados",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 45043, "senai": "-", "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 45043
      },
      {
        "indicadores": "Taxa de abertura de e-mail",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": "-", "sesi": 0.0342, "senai": "-", "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 0.0342
      },
      {
        "indicadores": "Site - Visitantes únicos",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-",
        "nov": { "fieam": 210, "sesi": "-", "senai": "-", "iel": "-" },
        "dez": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" },
        "acumulado": 210
      }
    ]
    
  

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
        Setor: Redes Sociais
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
  
          {row.nov && typeof row.nov === "object" && key in row.nov ? row.nov[key as keyof typeof row.nov] : "-"}
        </TableCell>
      ))}

      {/* Dados para Dezembro */}
      {["fieam", "sesi", "senai", "iel"].map((key) => (
        <TableCell align="center" key={key}>
          {row.dez && typeof row.dez === "object" && key in row.dez ? row.dez[key as keyof typeof row.dez] : "-"}
        </TableCell>
      ))}

      <TableCell align="center">{row.acumulado}</TableCell>
    </TableRow>
  ))}
</TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <h4>Atualizado em 27/11/2024</h4>
    </div>
  );
};

export default RedesSociais;
