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

const Comercial: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const data2024 = [
    { indicadores: "Qtd. profissionais ativos no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", "nov": 10,"dez": "9","acumulado": { "fieam": 19, "sesi": "-", "senai": "-", "iel": "-" } },
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
    { indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "2h51min",dez: "2h03min", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
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
        "nov": 147,
        "dez": 132,
        "acumulado": {
          "fieam": "-",
          "sesi": 168,
          "senai": 69,
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
          "nov": "R$ 1.672.149",
          "dez": "R$ 1.552.583",
          "acumulado": {
            "fieam": "-",
            "sesi": "R$ 2.069.092",
            "senai": "R$ 1.035.800",
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
    { indicadores: "Qtd. horas de trabalhadas no setor", "jan": 960,
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
  "dez": "-", acumulado: { fieam: 960, sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Total de ações executadas no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    {
        "indicadores": "Nº de visitas realizadas",
        "jan": 102,
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
        "acumulado": { "fieam": 102, "sesi": "-", "senai": "-", "iel": "-" }
      }, 
      {
        "indicadores": "Propostas geradas - Qtd",
        "jan": "119",
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
          "sesi": 75,
          "senai": 26,
          "iel": 18,
        }},
        {
          "indicadores": "Propostas geradas - R$",
          "jan": "R$ 721.491",
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
            "sesi": "R$ 545.052",
            "senai": "R$ 135.851",
            "iel":  "R$ 40.586" 

          }
        },
      {
        "indicadores": "Propostas Ganha - Qtd",
        "jan": 6,
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
        "acumulado": { "fieam": "-", "sesi": 4, "senai": 2, "iel": "-" }
      },
      {
        "indicadores": "Propostas Ganha - R$",
        "jan": "R$ 13.004",
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
          "fieam": "R$ 4.895",
          "sesi": "R$ 8.108,54",
          "senai": "-",
          "iel": "-"
        }
      },
      {
        "indicadores": "Pedidos gerados - Qtd",
        "jan": "46",
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
          "sesi": 36,
          "senai": 10,
          "iel": "-"
        }},
      {
        "indicadores": "Pedidos gerados - R$",
        "jan": "R$ 187.951",
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
          "sesi": "R$ 149.588",
          "senai": "R$ 38.363",
          "iel": "-" }
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
        "nov": "-",
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
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
        "nov": "-",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": "-",
          "senai": "-",
          "iel": "-"
        }
      }
    ]
  const categorizeIndicator = (indicator: string): string => {
    const pagoIndicators = [
      "Número de anúncios",
      "Alcance total",
      "Impressões (ADS)",
      "Cliques no anúncio",
      "CTR (Click-Through Rate)",
      "CPC (Custo por Clique)",
      "COM (Custo por Mil Impressões)",
      "Conversões",
      "Taxa de conversão (%)",
      "CPA (Custo por Aquisição)",
    ];
  
    const emailIndicators = [
      
     "Qtd de E-mails enviados",
      "Taxa de abertura de e-mail",
      
    ];
   const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "Pago";
    if (emailIndicators.includes(indicator)) return "Email";
    if (siteIndicators.includes(indicator)) return "Site";
  
    return "";
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
                    onClick={() => navigate("/organograma")}
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
      <h4>Atualizado até 20/01/2025</h4>
    </div>
  );
};
export default Comercial;
