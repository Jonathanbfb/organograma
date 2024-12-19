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
  const [selectedYear, setSelectedYear] = useState("2024");

  const data2024 = [
    { indicadores: "Qtd. profissional ativo", jan: "5", fev: "5", mar: "5", abr: "6", mai: "5", jun: "5", jul: "5", ago: "6", set: "5", out: "6", "nov": 10,"dez": "8","acumulado": { "fieam": 5.9, "sesi": "-", "senai": "-", "iel": "-" } },
    { indicadores: "Qtd. horas de trabalho", "jan": 880,
  "fev": 880,
  "mar": 880,
  "abr": 1056,
  "mai": 880,
  "jun": 880,
  "jul": 880,
  "ago": 1056,
  "set": 880,
  "out": 1056,
  "nov": 1760,
  "dez": 1408, acumulado: { fieam: "1041", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Total de ações executadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "252",dez: "-", acumulado: { fieam: "252", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "6.98",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
         
    /* {
        "indicadores": "Número de consultoras ativas por mês",
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
        "nov": 9,
        "dez": "-",
        "acumulado": { "fieam": 9, "sesi": "-", "senai": "-", "iel": "-" }
      },
      */
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
        "nov": 39,
        "dez": "-",
        "acumulado": { "fieam": 39, "sesi": "-", "senai": "-", "iel": "-" }
      }, 
      {
        "indicadores": "Proposta Gerada - Qtd",
        "jan": 131,
        "fev": 91,
        "mar": 116,
        "abr": 102,
        "mai": 132,
        "jun": 84,
        "jul": 131,
        "ago": 105,
        "set": 63,
        "out": 103,
        "nov": 116,
        "dez": 59,
        "acumulado": {
          "fieam": 1,
          "sesi": 669,
          "senai": 338,
          "iel": 116
        }},
        {
          "indicadores": "Proposta Gerada - R$",
          "jan": "R$ 1.106.970",
          "fev": "R$ 1.566.590",
          "mar": "R$ 742.618",
          "abr": "R$ 443.479",
          "mai": "R$ 617.127",
          "jun": "R$ 518.687",
          "jul": "R$ 933.425",
          "ago": "R$ 2.052.751",
          "set": "R$ 7.604.211",
          "out": "R$ 3.591.480",
          "nov": "R$ 1.622.159",
          "dez": "R$ 1.313.726",
          "acumulado": {
            "fieam": "-",
            "sesi": "R$ 17.371.830,92",
            "senai": "R$ 4.391.547,60",
            "iel": "R$ 712.255,26"
          }
        },
      {
        "indicadores": "Proposta fechados - Qtd",
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
        "nov": 62,
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": 42, "senai": 14, "iel": 6 }
      },
      {
        "indicadores": "Proposta fechados - R$",
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
        "nov": "R$ 718.101",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": "R$ 685.703",
          "senai": "R$ 24.699",
          "iel": "R$ 7.699"
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
        "nov": 21,
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": 16, "senai": 4, "iel": 1 }
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
        "nov": "R$ 64.608",
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": "R$ 64.608", "senai": "-", "iel": "-" }
      },
      {
        "indicadores": "Pedidos fechados - Qtd",
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
        "nov": 14,
        "dez": "-",
        "acumulado": { "fieam": "-", "sesi": 14, "senai": "-", "iel": "-" }
      },
      {
        "indicadores": "Pedidos fechados - R$",
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
        "nov": "R$ 64.608",
        "dez": "-",
        "acumulado": {
          "fieam": "-",
          "sesi": "R$ 64.608",
          "senai": "-",
          "iel": 20
        }
      }
    
    
      
      
  ];

  const data2025 = [
      
    { indicadores: "Qtd. profissional ativo", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", "nov":"-","dez": "-","acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" } },
    { indicadores: "Qtd. horas de trabalho", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Total de ações executadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
      
   /*  {
        "indicadores": "Número de consultoras ativas por mês",
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
        "acumulado": "-"
      }, */
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
        "nov": "-",
        "dez": "-",
        "acumulado": "-"
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
        "ago": "-",
        "set": "-",
        "out": "-",
        "nov": "-",
        "dez": "-",
        "acumulado": "-"
      },
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
        "nov": "-",
        "dez": "-",
        "acumulado": "-"
      },
      {
        "indicadores": "Proposta fechados - Qtd",
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
        "acumulado": "-"
      },
      {
        "indicadores": "Proposta fechados - R$",
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
        "acumulado": "-"
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
        "nov": "-",
        "dez": "-",
        "acumulado": "-"
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
        "nov": "-",
        "dez": "-",
        "acumulado": "-"
      },
      {
        "indicadores": "Pedidos fechados - Qtd",
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
        "acumulado": "-"
      },
      {
        "indicadores": "Pedidos fechados - R$",
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
        "acumulado": "-"
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
  const data = selectedYear === "2024" ? data2024 : data2025;

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
          <Tab value="2024" label="2024" />
          <Tab value="2025" label="2025" />
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
      <h4>Atualizado até 27/11/2024</h4>
    </div>
  );
};
export default Comercial;
