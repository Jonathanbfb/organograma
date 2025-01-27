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

const RedesSociais: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const data2024 = [
    
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
   
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
        {
          "indicadores": "Número de anúncios",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 195,
          "acumulado": { "fieam": 0, "sesi": 146, "senai": 49, "iel": 0 }
        },
        {
          "indicadores": "Alcance total",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 513221,
          "acumulado": { "fieam": 0, "sesi": 336409, "senai": 176812, "iel": 0 }
        },
        {
          "indicadores": "Impressões (ADS)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 2285816,
          "acumulado": { "fieam": 0, "sesi": 1398706, "senai": 887110, "iel": 0 }
        },
        {
          "indicadores": "Cliques no anúncio",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 24300,
          "acumulado": { "fieam": 0, "sesi": 14732, "senai": 9568, "iel": 0 }
        },
        {
          "indicadores": "CTR (Click-Through Rate)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 0.0213,
          "acumulado": { "fieam": 0, "sesi": 0.0105, "senai": 0.0108, "iel": 0 }
        },
        {
          "indicadores": "CPC (Custo por Clique)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 1.74,
          "acumulado": { "fieam": 0, "sesi": 0.76, "senai": 0.98, "iel": 0 }
        },
        {
          "indicadores": "COM (Custo por Mil Impressões)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 18.88,
          "acumulado": { "fieam": 0, "sesi": 9.87, "senai": 9.01, "iel": 0 }
        },
        {
          "indicadores": "Conversões",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 3405,
          "acumulado": { "fieam": 0, "sesi": 2252, "senai": 1153, "iel": 0 }
        },
        {
          "indicadores": "Taxa de conversão (%)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 0,
          "acumulado": { "fieam": 0, "sesi": 0, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "CPA (Custo por Aquisição)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 15.36,
          "acumulado": { "fieam": 0, "sesi": 7.21, "senai": 8.15, "iel": 0 }
        },
        {
          "indicadores": "Qtd de E-mails enviados",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 45043,
          "acumulado": { "fieam": 0, "sesi": 45043, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "Taxa de abertura de e-mail",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 0.0342,
          "acumulado": { "fieam": 0, "sesi": 0.0342, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "Site - Visitantes únicos",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 210,
          "acumulado": { "fieam": 210, "sesi": 0, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "Publicação nas redes sociais",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
    {
          "indicadores": "Resposta de comentários nas redes sociais",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
        {
          "indicadores": "Contas Alcançadas",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
        {
          "indicadores": "Interações",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
    {
          "indicadores": "Taxa de Engajamento",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        }, 
       
        {
          "indicadores": "Seguidores",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        }, 
        ];

  const data2025 = [
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": 3, "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 3, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": 408, "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 408, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
   
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
    {
      "indicadores": "Número de anúncios",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Alcance total",
      "jan": 785.706, "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 39.500, "sesi": 387.410, "senai": 214.582, "iel": 144.214
      }
    },
    {
      "indicadores": "Impressões (ADS)",
      "jan": "1.563.641", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 41.200, "sesi": 697.581, "senai": 623.601, "iel": 201259
      }
    },
    {
      "indicadores": "Cliques no anúncio",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "CTR (Click-Through Rate)",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "CPC (Custo por Clique)",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "COM (Custo por Mil Impressões)",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Conversões",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Taxa de conversão (%)",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "CPA (Custo por Aquisição)",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd de E-mails enviados",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Taxa de abertura de e-mail",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Site - Visitantes únicos",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Publicação nas redes sociais",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
{
      "indicadores": "Resposta de comentários nas redes sociais",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Contas Alcançadas",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Interações",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
{
      "indicadores": "Taxa de Engajamento",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
    {
      "indicadores": "Seguidores",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
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

    const OrganicoIndicators = [
      
"Seguidores",
"Taxa de Engajamento",
"Interações",
"Contas Alcançadas",
"Resposta de comentários nas redes sociais",
"Publicação nas redes sociais"
       
     ];
   const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "Pago";
    if (emailIndicators.includes(indicator)) return "Email";
    if (siteIndicators.includes(indicator)) return "Site";
    if (OrganicoIndicators.includes(indicator)) return "Orgânico";
  
    return " ";
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
  };

  const data = selectedYear === "2024" ? data2024 : data2025;

  const handlePrint = () => {
    window.print();
  };

  const groupedData = data.reduce((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h4" gutterBottom>
                Setor: Redes Sociais
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
    backgroundColor: "#ADD8E6",
    fontWeight: "bold",
    textAlign: "center",
    verticalAlign: "middle",
    padding: "4px",
    width: "30px", 
    maxWidth: "30px", 
    whiteSpace: "nowrap",
    overflow: "hidden", 
   
  }}
>
Tipo
</TableCell>
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
        {rowIndex === 0 && (
          <TableCell
            rowSpan={rows.length}
            align="center"
            style={{
              fontWeight: "bold",
              verticalAlign: "middle",
              transform: "rotate(-90deg)", 
              textAlign: "center", 
              minWidth: "25px", 
              maxWidth: "25px",
              width: "25px",
              whiteSpace: "nowrap",
              padding: "2px",
              //overflow: "hidden", 
              
            }}
          >
            {category}
          </TableCell>
        )}
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
export default RedesSociais;
