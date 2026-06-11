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

const orders = [
  {
    id: 101,
    cliente: "Mariana Souza",
    produto: "Monster Ultra",
    quantidade: 6,
    total: 77.4,
    status: "Entregue",
  },
  {
    id: 102,
    cliente: "Lucas Andrade",
    produto: "Red Bull Original",
    quantidade: 4,
    total: 59.6,
    status: "Em separação",
  },
  {
    id: 103,
    cliente: "Carla Mendes",
    produto: "TNT Energy",
    quantidade: 12,
    total: 118.8,
    status: "Pendente",
  },
  {
    id: 104,
    cliente: "Rafael Lima",
    produto: "Fusion Tradicional",
    quantidade: 8,
    total: 71.2,
    status: "Entregue",
  },
];

const statusColor = {
  Entregue: "success",
  "Em separação": "warning",
  Pendente: "default",
};

const totalPedidos = orders.reduce((total, order) => total + order.total, 0);

export default function Orders() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Pedidos
      </Typography>

      <Button variant="contained" sx={{ mb: 3 }}>
        Novo Pedido
      </Button>

      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Qtd.</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.cliente}</TableCell>
                <TableCell>{order.produto}</TableCell>
                <TableCell>{order.quantidade}</TableCell>
                <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColor[order.status]}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined">
                      Detalhes
                    </Button>
                    <Button size="small" color="success" variant="contained">
                      Finalizar
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
          Resumo de Pedidos
        </Typography>

        <Typography>
          Existem {orders.length} pedidos registrados, somando R${" "}
          {totalPedidos.toFixed(2)} em vendas simuladas nesta etapa.
        </Typography>
      </Paper>
    </>
  );
}
