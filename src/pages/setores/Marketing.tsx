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

const Marketing: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2024");

  const data2024 = [
    {
      indicadores: "Campanhas ativas",
      jan: "-",
      fev: "-",
      mar: "-",
      abr: "-",
      mai: "-",
      jun: "-",
      jul: "-",
      ago: "-",
      set: "-",
      out: "-",
      nov: "12",
      dez: "-",
      acumulado:{ fieam: 2, sesi: 4, senai: 3, iel: 3 },
    },
    { indicadores: "Roteiro de vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 31,dez: "-", acumulado: { fieam: 1, sesi: 25, senai: 3, iel: 2 } },
    { indicadores: "Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 31,dez: "-", acumulado: { fieam: 1, sesi: 25, senai: 3, iel: 2 } },
    { indicadores: "Revisão de Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 31 ,dez: "-", acumulado: { fieam: 1, sesi: 25, senai: 3, iel: 2 }, },
    { indicadores: "Revisão de Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 86 ,dez: "-", acumulado: { fieam: 14, sesi: 31, senai: 23, iel: 18 } ,},
    { indicadores: "Espelho das Peças Concluídos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:"86" ,dez: "-", acumulado:{ fieam: 14, sesi: 31, senai: 23, iel: 18 }, },
    { indicadores: "Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 86,dez: "-", acumulado: { fieam: 14, sesi: 31, senai: 23, iel: 18 }, },
    { indicadores: "Stories", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:206, dez: "-", acumulado: { fieam: 16, sesi: 131, senai: 23, iel: 36 }, },
    { indicadores: "Flyers", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 12 ,dez: "-", acumulado: { fieam: "-", sesi: 12, senai: "-", iel: "-" } ,},
    { indicadores: "Textos/ Copies", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 117,dez: "-", acumulado: { fieam: 15, sesi: 56, senai: 26, iel: 20 } },
    { indicadores: "Publicação nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 351,dez: "-", acumulado: { fieam: 45, sesi: 168, senai: 78, iel: 60 }, },
    { indicadores: "Resposta de comentários nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:367 ,dez: "-", acumulado:  { fieam: "-", sesi: 221, senai: 104, iel: 42 }, },
    { indicadores: "Contas Alcançadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:564203,dez: "-", acumulado:  { fieam: 34760, sesi: 329397, senai: 118503, iel: 81543 } },
    { indicadores: "Impressões", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 2290408,dez: "-", acumulado: { fieam: 10473, sesi: 1590735, senai: 673674, iel: 15526 } },
    { indicadores: "Interações (curtidas, engajamento, compartilhamento e salvamentos)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:25986 ,dez: "-" , acumulado: { fieam: 1219, sesi: 17014, senai: 5462, iel: 2291 }, },
    { indicadores: "Taxa de engajamento", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 10917,dez: "-", acumulado:  { fieam: 587, sesi: 6217, senai: 2954, iel: 1159 }, },
    { indicadores: "Crescimento de Seguidores", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 2549,dez: "-", acumulado: { fieam: 243, sesi: 1563, senai: 563, iel: 180 } , },

  ];

  const data2025 = [
    {
      indicadores: "Campanhas ativas",
      jan: "-",
      fev: "-",
      mar: "-",
      abr: "-",
      mai: "-",
      jun: "-",
      jul: "-",
      ago: "-",
      set: "-",
      out: "-",
      nov: "-",
      dez: "-",
      acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" },
    },
    { indicadores: "Roteiro de vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam:"-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam:"-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Revisão de Vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-" ,dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Revisão de Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-" ,dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } ,},
    { indicadores: "Espelho das Peças Concluídos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-" ,dez: "-", acumulado:{ fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Cards", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Stories", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:"-", dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Flyers", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-" ,dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } ,},
    { indicadores: "Textos/ Copies", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Publicação nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Resposta de comentários nas redes sociais", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:"-" ,dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Contas Alcançadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:"-",dez: "-", acumulado:  { fieam: "-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Impressões", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Interações (curtidas, engajamento, compartilhamento e salvamentos)", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:"-" ,dez: "-" , acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Taxa de engajamento", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado:  { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Crescimento de Seguidores", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" } , },
  ];

  const categorizeIndicator = (indicator: string): string => {
    const pagoIndicators = [
      "Campanhas ativas",
      "Roteiro de vídeos",
      "Vídeos",
      "Revisão de Vídeos",
      "Revisão de Cards",
      "Espelho das Peças Concluídos",
      "Cards",
      "Stories",
      "Flyers",
      "Textos/ Copies",
      "Publicação nas redes sociais",
      "Resposta de comentários nas redes sociais",
    ];
  
    const emailIndicators = [
      
     "Contas Alcançadas",
      "Impressões",
      "Interações (curtidas, engajamento, compartilhamento e salvamentos)",
      "Taxa de engajamento",
      "Crescimento de Seguidores"
    
    ];
   // const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "Midia ON e OFF";
    if (emailIndicators.includes(indicator)) return "Orgânico";
    //if (siteIndicators.includes(indicator)) return "Site";
  
    return "Outro";
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
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
      <Typography variant="h4" gutterBottom>
        Setor: Marketing
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
    backgroundColor: "#ADD8E6",
    fontWeight: "bold",
    textAlign: "center",
    verticalAlign: "middle",
    padding: "4px",
    width: "30px", 
    maxWidth: "30px", 
    whiteSpace: "nowrap",
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
            padding: "2px",
            minWidth: "30px",
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
          height: "30px",
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
export default Marketing;