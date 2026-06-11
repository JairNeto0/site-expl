import {
  Button,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const employees = [
  {
    id: 1,
    nome: "Eduardo Prado",
    cargo: "Administrador",
    email: "eduardo@expl.com",
    turno: "Integral",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Bruno Lucas",
    cargo: "Operador",
    email: "bruno@expl.com",
    turno: "Manhã",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Ana Ribeiro",
    cargo: "Estoque",
    email: "ana@expl.com",
    turno: "Tarde",
    status: "Ativo",
  },
  {
    id: 4,
    nome: "João Pedro",
    cargo: "Financeiro",
    email: "joao@expl.com",
    turno: "Integral",
    status: "Férias",
  },
];

const activeEmployees = employees.filter((employee) => employee.status === "Ativo");

export default function Employees() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Funcionários
      </Typography>

      <Button variant="contained" sx={{ mb: 3 }}>
        Novo Funcionário
      </Button>

      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Turno</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.nome}</TableCell>
                <TableCell>{employee.cargo}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.turno}</TableCell>
                <TableCell>
                  <Chip
                    label={employee.status}
                    color={employee.status === "Ativo" ? "success" : "warning"}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined">
                      Editar
                    </Button>
                    <Button size="small" color="error" variant="contained">
                      Remover
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom>
          Resumo da Equipe
        </Typography>

        <Typography>
          A EXPL possui {employees.length} funcionários cadastrados, com{" "}
          {activeEmployees.length} disponíveis para operação.
        </Typography>
      </Paper>
    </>
  );
}
