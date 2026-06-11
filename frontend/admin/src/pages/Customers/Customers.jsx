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

const customers = [
  {
    id: 1,
    nome: "Mariana Souza",
    email: "mariana@email.com",
    telefone: "(11) 99999-1001",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Lucas Andrade",
    email: "lucas@email.com",
    telefone: "(21) 98888-2002",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Carla Mendes",
    email: "carla@email.com",
    telefone: "(31) 97777-3003",
    status: "Pendente",
  },
  {
    id: 4,
    nome: "Rafael Lima",
    email: "rafael@email.com",
    telefone: "(41) 96666-4004",
    status: "Ativo",
  },
];

const activeCustomers = customers.filter((customer) => customer.status === "Ativo");

export default function Customers() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Clientes
      </Typography>

      <Button variant="contained" sx={{ mb: 3 }}>
        Novo Cliente
      </Button>

      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.nome}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.telefone}</TableCell>
                <TableCell>
                  <Chip
                    label={customer.status}
                    color={customer.status === "Ativo" ? "success" : "warning"}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined">
                      Editar
                    </Button>
                    <Button size="small" color="error" variant="contained">
                      Bloquear
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
          Resumo de Clientes
        </Typography>

        <Typography>
          O sistema possui {customers.length} clientes cadastrados, com{" "}
          {activeCustomers.length} clientes ativos para compra.
        </Typography>
      </Paper>
    </>
  );
}
