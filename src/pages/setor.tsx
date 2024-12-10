import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Button } from "@mui/material";

const Setor: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  // Exemplo de dados para a tabela
  const rows = [
    { id: 1, col1: "Dado 1", col2: "Dado 2", col3: "Dado 3" },
    { id: 2, col1: "Dado 4", col2: "Dado 5", col3: "Dado 6" },
    { id: 3, col1: "Dado 7", col2: "Dado 8", col3: "Dado 9" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Coluna 1", flex: 1 },
    { field: "col2", headerName: "Coluna 2", flex: 1 },
    { field: "col3", headerName: "Coluna 3", flex: 1 },
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

      <h1>Setor: {name}</h1>

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

export default Setor;
