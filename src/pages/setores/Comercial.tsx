import React, { useState } from "react";
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
  Tabs,
  Tab,
  Box,
  Tooltip,
} from "@mui/material";
import PowerBIModalComercial from "./modalBI/PowerBIModal";

const Comercial: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const data2024 = [
    { indicadores: "Qtd. profissionais ativos no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", "nov": 10,"dez": "9","acumulado": { "fieam": "9,5", "sesi": "-", "senai": "-", "iel": "-" } },
    { indicadores: "Qtd. horas de trabalhadas no setor", "jan": "-",
  "fev": "-",
  "mar": "-",
  "abr": "-",
  "mai": "-",
  "jun": "-",
  "jul": "-",
  "ago": "-",
  "set": "-",
  "out": "-",
  "nov": "1.600",
  "dez": "1.224", acumulado: { fieam: "2.824", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Total de ações executadas no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "560",dez: "591", acumulado: { fieam: "1.151", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "2h51min",dez: "2h03min", acumulado: { fieam: "2h27min", sesi: "-", senai: "-", iel: "-" }, },
    {
        "indicadores": "Nº de visitas realizadas",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": 40,
        "dez": 20,
        "acumulado": { "fieam": 60, "sesi": "-", "senai": "-", "iel": "-" }
      }, 
      {
        "indicadores": "Propostas geradas - Qtd",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago":"-",
        "set": "-",
        "out": "-",
        "nov": 144,
        "dez": 128,
        "acumulado": {
          "fieam": "-",
          "sesi": 168,
          "senai": 62,
          "iel": 42
        }},
        {
          "indicadores": "Propostas geradas - R$",
          "jan": "-",
          "fev": "-",
          "mar": "-",
          "abr": "-",
          "mai": "-",
          "jun": "-",
          "jul": "-",
          "ago": "-",
          "set": "-",
          "out": "-",
          "nov": "R$ 1.651.434",
          "dez": "R$ 1.370.626",
          "acumulado": {
            "fieam": "-",
            "sesi": "R$ 2.069.092",
            "senai": "R$ 833.128",
            "iel": "R$ 119.840"
          }
        },
      {
        "indicadores": "Propostas Ganha - Qtd",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": 18,
        "dez": 10,
        "acumulado": { "fieam": "-", "sesi": 8, "senai": 20, "iel": "-" }
      },
      {
        "indicadores": "Propostas Ganha - R$",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": " R$ 54.039",
        "dez": " R$ 203.059",
        "acumulado": {
          "fieam": "-",
          "sesi": "R$ 17.065",
          "senai": "R$ 240.034",
          "iel": "-"
        }
      },
      {
        "indicadores": "Pedidos gerados - Qtd",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": 373,
        "dez": 440,
        "acumulado": { "fieam": "-", "sesi":748, "senai": 65, "iel":"-" }
      },
      {
        "indicadores": "Pedidos gerados - R$",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "R$ 1.347.214",
        "dez": " R$ 1.220.266",
        "acumulado": { "fieam": "-", "sesi": "R$ 1.985.745", "senai": "R$ 581.734", "iel": "-" }
      },
      {
        "indicadores": "Pedidos faturados - Qtd",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": 350,
        "dez": 396,
        "acumulado": { "fieam": "-", "sesi": 695, "senai": 51, "iel": "-" }
      },
      {
        "indicadores": "Pedidos faturados - R$",
        "jan": "-",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "R$ 1.119.479",
        "dez": "R$ 1.017.566",
        "acumulado": {
          "fieam": "-",
          "sesi": "R$ 1.854.887",
          "senai": "R$ 282.158",
          "iel": "-"
        }
      }
  ];

  const data2025 = [
      
    { indicadores: "Qtd. profissionais ativos no mês", jan: 10, fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", "nov": "-","dez": "-","acumulado": { "fieam": 10, "sesi": "-", "senai": "-", "iel": "-" } },
    { indicadores: "Qtd. horas de trabalhadas no setor", "jan": "1.680",
  "fev": "-",
  "mar": "-",
  "abr": "-",
  "mai": "-",
  "jun": "-",
  "jul": "-",
  "ago": "-",
  "set": "-",
  "out": "-",
  "nov": "-",
  "dez": "-", acumulado: { fieam: "1.680", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Total de ações executadas no mês", jan: 584, fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: 584, sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Tempo médio por ação executada", jan: "2h52min", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    {
        "indicadores": "Nº de visitas realizadas",
        "jan": 160,
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": { "fieam": 160, "sesi": "-", "senai": "-", "iel": "-" }
      }, 
      {
        "indicadores": "Propostas geradas - Qtd",
        "jan": 181,
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago":"-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": 109,
          "senai": 42,
          "iel": 30,
        }},
        {
          "indicadores": "Propostas geradas - R$",
          "jan": "R$ 845.635",
          "fev": "-",
          "mar": "-",
          "abr": "-",
          "mai": "-",
          "jun": "-",
          "jul": "-",
          "ago": "-",
          "set": "-",
          "out": "-",
          "nov": "-",
          "dez": "-",
          "acumulado": {
            "fieam": "-",
            "sesi": "R$ 544.905",
            "senai": "R$ 181.333",
            "iel":  "R$ 119.396" 

          }
        },
      {
        "indicadores": "Propostas Ganha - Qtd",
        "jan": 62,
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": 40, "senai": 16, "iel": 6 }
      },
      {
        "indicadores": "Propostas Ganha - R$",
        "jan": "R$ 182.065",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi":  "R$ 120.136",
          "senai": "R$ 57.230",
          "iel": "R$ 4.698"
        }
      },
      {
        "indicadores": "Pedidos gerados - Qtd",
        "jan": "96",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago":"-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": 79,
          "senai": 17,
          "iel": "-"
        }},
      {
        "indicadores": "Pedidos gerados - R$",
        "jan": "R$ 874.238",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": "R$ 712.602",
          "senai": "R$ 161.635",
          "iel": "-" }
      },
      {
        "indicadores": "Pedidos faturados - Qtd",
        "jan": 85,
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": 69, "senai": 16, "iel": "-" }
      },
      {
        "indicadores": "Pedidos faturados - R$",
        "jan": "R$ 865.630",
        "fev": "-",
        "mar": "-",
        "abr": "-",
        "mai": "-",
        "jun": "-",
        "jul": "-",
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": "R$ 707.570",
          "senai": "R$ 158.059",
          "iel": "-"
        }
      }
    ]
  const categorizeIndicator = (indicator: string): string => {
    const pagoIndicators = [
      "Qtd. profissionais ativos no mês",
      
    ];
  
    const emailIndicators = [
      
     "Pedidos faturados - R$",
     
      
    ];
   const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "RH";
    if (emailIndicators.includes(indicator)) return "PJ";
    if (siteIndicators.includes(indicator)) return "Site";
  
    return ".";
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
  };

  const handlePrint = () => {
    window.print();
  };
  const data = selectedYear === "2025" ? data2025 : data2024;

  const groupedData = data.reduce((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h4" gutterBottom>
                Setor: Comercial
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Tooltip title="Voltar para o menu principal">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/indicadores")}
                    style={{ marginBottom: "20px" }}
                  >
                    Voltar
                  </Button>
                </Tooltip>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handlePrint}
                  style={{ marginBottom: "20px", marginLeft: "10px" }}
                >
                  Imprimir
                </Button>
                <PowerBIModalComercial></PowerBIModalComercial>
              </div>
            </div>
          </div>
       <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <Tabs
          value={selectedYear}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Tabs de anos"
        >
          <Tab value="2025" label="2025" />
          
          <Tab value="2024" label="2024" />

        </Tabs>
      </Box>
      <Paper sx={{ marginTop: "20px" }}>
        <TableContainer>
          <Table>
          <TableHead>
  <TableRow>

    <TableCell
      rowSpan={2}
      style={{
        fontWeight: "bold",
        backgroundColor: "#ADD8E6",
        padding: "2px",
        textAlign: "center",
        minWidth: "180px",
        maxWidth: "180px",
        width: "180px",
      
      }}
    >
      Indicadores
    </TableCell>
    {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].map(
      (month, index) => (
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
      )
    )}
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
      Acumulado
    </TableCell>
  </TableRow>
  <TableRow>
    {["FIEAM", "SESI", "SENAI", "IEL"].map((name, index) => (
      <TableCell
        key={`acumulado-${index}`}
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
  {Object.entries(groupedData).map(([category, rows]) => (
    rows.map((row, rowIndex) => (
      <TableRow
        key={`${category}-${rowIndex}`}
        sx={{
          "& .MuiTableCell-root": {
            padding: "4px 6px",
            lineHeight: "1",
          },
          height: "50px",
          backgroundColor: rowIndex % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alterna entre duas cores
        }}
      >
        
        <TableCell
        style={{
          fontWeight: "bold",
          verticalAlign: "middle",
          textAlign: "left", 
          minWidth: "180px",
          maxWidth: "180px",
          width: "180px",
          padding: "2px",
        }}
        >{row.indicadores}</TableCell>
        {["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"].map((month) => (
          <TableCell align="center" key={month}>
            {typeof row[month] === "object"
              ? Object.entries(row[month])
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(", ")
              : row[month] !== undefined
              ? row[month]
              : "-"}
          </TableCell>
        ))}
        {["fieam", "sesi", "senai", "iel"].map((key) => (
          <TableCell align="center" key={key}>
            {row.acumulado && row.acumulado[key] !== undefined ? row.acumulado[key] : "-"}
          </TableCell>
        ))}
      </TableRow>
    ))
  ))}
</TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <h4>Atualizado até 29/01/2025 às 13:30h</h4>
    </div>
  );
};
export default Comercial;
