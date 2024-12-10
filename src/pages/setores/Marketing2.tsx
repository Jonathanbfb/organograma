import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Button } from "@mui/material";

const Marketing: React.FC = () => {
  const navigate = useNavigate();

  // Dados fictícios para o setor de Marketing
  const rows = [
    { id: 1, col1: "Campanha A", col2: "Ativo", col3: "Janeiro" },
    { id: 2, col1: "Campanha B", col2: "Pausado", col3: "Fevereiro" },
    { id: 3, col1: "Campanha C", col2: "Concluído", col3: "Março" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Campanha", flex: 1 },
    { field: "col2", headerName: "Status", flex: 1 },
    { field: "col3", headerName: "Mês", flex: 1 },
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

      <h1>Setor: Marketing</h1>

      {/* Tabela */}
      <Paper sx={{ height: 400, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default Marketing;
