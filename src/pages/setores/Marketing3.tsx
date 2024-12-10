import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Button, Typography } from "@mui/material";

const Marketing: React.FC = () => {
  const navigate = useNavigate();

  const rows = [
    {
      id: 1,
      indicadores: "Campanhas ativas",
      janeiro: "-",
      fevereiro: "-",
      março: "-",
      abril: "-",
      maio: "-",
      junho: "-",
      julho: "-",
      agosto: "-",
      setembro: "-",
      outubro: "-",
      novembro_fieam: 2,
      novembro_sesi: 4,
      novembro_senai: 3,
      novembro_iel: 3,
      dezembro_fieam: 2,
      dezembro_sesi: 4,
      dezembro_senai: 3,
      dezembro_iel: 3,
      acumulado: 12,
    },
    {
      id: 2,
      indicadores: "Roteiro de vídeos",
      janeiro: "-",
      fevereiro: "-",
      março: "-",
      abril: "-",
      maio: "-",
      junho: "-",
      julho: "-",
      agosto: "-",
      setembro: "-",
      outubro: "-",
      novembro_fieam: 1,
      novembro_sesi: 25,
      novembro_senai: 3,
      novembro_iel: 2,
      dezembro_fieam: 1,
      dezembro_sesi: 25,
      dezembro_senai: 3,
      dezembro_iel: 2,
      acumulado: 31,
    },
    // Adicione os outros dados aqui seguindo o mesmo padrão
  ];

  const columns: GridColDef[] = [
    { field: "indicadores", headerName: "Indicadores", flex: 2 },
    { field: "janeiro", headerName: "Janeiro", flex: 1 },
    { field: "fevereiro", headerName: "Fevereiro", flex: 1 },
    { field: "março", headerName: "Março", flex: 1 },
    { field: "abril", headerName: "Abril", flex: 1 },
    { field: "maio", headerName: "Maio", flex: 1 },
    { field: "junho", headerName: "Junho", flex: 1 },
    { field: "julho", headerName: "Julho", flex: 1 },
    { field: "agosto", headerName: "Agosto", flex: 1 },
    { field: "setembro", headerName: "Setembro", flex: 1 },
    { field: "outubro", headerName: "Outubro", flex: 1 },
    { field: "novembro_fieam", headerName: "Novembro (FIEAM)", flex: 1 },
    { field: "novembro_sesi", headerName: "Novembro (SESI)", flex: 1 },
    { field: "novembro_senai", headerName: "Novembro (SENAI)", flex: 1 },
    { field: "novembro_iel", headerName: "Novembro (IEL)", flex: 1 },
    { field: "dezembro_fieam", headerName: "Dezembro (FIEAM)", flex: 1 },
    { field: "dezembro_sesi", headerName: "Dezembro (SESI)", flex: 1 },
    { field: "dezembro_senai", headerName: "Dezembro (SENAI)", flex: 1 },
    { field: "dezembro_iel", headerName: "Dezembro (IEL)", flex: 1 },
    { field: "acumulado", headerName: "Acumulado/Ano", flex: 1 },
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
      <Paper sx={{ height: 600, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default Marketing;
