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
} from "@mui/material";

const Mercado: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2024");

  const data2024 = 
  [
    {
      "indicadores": "Nº de projetos em andamento",
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
      "nov": "6",
      "dez": "2",
      "acumulado": {
        "fieam": "-",
        "sesi": "-",
        "senai": "-",
        "iel": "8"
      }
    },
    {
      "indicadores": "Nº de projetos - SESI EDUCAÇÃO",
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
    },
    {
      "indicadores": "Nº de projetos - SESI LAZER",
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
      "nov": "1",
      "dez": "-",
      "acumulado": {
        "fieam": "-",
        "sesi": "1",
        "senai": "-",
        "iel": "-"
      }
    },
    {
      "indicadores": "Nº de projetos - SESI SAÚDE",
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
      "nov": "1",
      "dez": "1",
      "acumulado": {
        "fieam": "-",
        "sesi": "2",
        "senai": "-",
        "iel": "-"
      }
    },
    {
      "indicadores": "Nº de projetos - SESI SST",
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
      "nov": "2",
      "dez": "-",
      "acumulado": {
        "fieam": "-",
        "sesi": "2",
        "senai": "-",
        "iel": "-"
      }
    },
    {
      "indicadores": "Nº de projetos - SENAI",
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
    },
    {
      "indicadores": "Nº de projetos - IEL",
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
    },
    {
      "indicadores": "Nº de projetos - DCM",
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
      "nov": "2",
      "dez": "-",
      "acumulado": {
        "fieam": "-",
        "sesi": "-",
        "senai": "-",
        "iel": "2"
      }
    },
    {
      "indicadores": "Nº de projetos - CNI",
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
      "dez": "1",
      "acumulado": {
        "fieam": "-",
        "sesi": "-",
        "senai": "-",
        "iel": "1"
      }
    }
  ]
    const data2025 = [
    {
      "indicadores": "Nº de projetos em andamento",
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
      "nov": "6",
      "dez": "2",
      "acumulado": {
        "fieam": "-",
        "sesi": "-",
        "senai": "-",
        "iel": "8"
      }
    },
    {
      "indicadores": "Nº de projetos - SESI EDUCAÇÃO",
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
    },
    {
      "indicadores": "Nº de projetos - SESI LAZER",
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
      "nov": "1",
      "dez": "-",
      "acumulado": {
        "fieam": "-",
        "sesi": "1",
        "senai": "-",
        "iel": "-"
      }
    },
    {
      "indicadores": "Nº de projetos - SESI SAÚDE",
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
      "nov": "1",
      "dez": "1",
      "acumulado": {
        "fieam": "-",
        "sesi": "2",
        "senai": "-",
        "iel": "-"
      }
    },
    {
      "indicadores": "Nº de projetos - SESI SST",
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
      "nov": "2",
      "dez": "-",
      "acumulado": {
        "fieam": "-",
        "sesi": "2",
        "senai": "-",
        "iel": "-"
      }
    },
    {
      "indicadores": "Nº de projetos - SENAI",
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
    },
    {
      "indicadores": "Nº de projetos - IEL",
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
    },
    {
      "indicadores": "Nº de projetos - DCM",
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
      "nov": "2",
      "dez": "-",
      "acumulado": {
        "fieam": "-",
        "sesi": "-",
        "senai": "-",
        "iel": "2"
      }
    },
    {
      "indicadores": "Nº de projetos - CNI",
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
      "dez": "1",
      "acumulado": {
        "fieam": "-",
        "sesi": "-",
        "senai": "-",
        "iel": "1"
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

  const data = selectedYear === "2024" ? data2024 : data2025;

  const groupedData = data.reduce((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});

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
      <Button
        variant="contained"
        color="inherit"
      onClick={handlePrint}
        style={{ marginBottom: "20px", marginLeft: "10px",alignItems:"start" }}
      >
        Imprimir
      </Button>
      <Typography variant="h4" gutterBottom>
        Setor: Inteligência de Mercado
      </Typography>
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
export default Mercado;
