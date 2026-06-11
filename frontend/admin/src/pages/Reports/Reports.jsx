import {
  Button,
  Grid,
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

const metrics = [
  { titulo: "Faturamento", valor: "R$ 12.450" },
  { titulo: "Pedidos", valor: 158 },
  { titulo: "Ticket médio", valor: "R$ 78,80" },
  { titulo: "Estoque", valor: 265 },
];

const reports = [
  {
    id: 1,
    nome: "Vendas por período",
    categoria: "Financeiro",
    atualizado: "11/06/2026",
  },
  {
    id: 2,
    nome: "Produtos mais vendidos",
    categoria: "Produtos",
    atualizado: "10/06/2026",
  },
  {
    id: 3,
    nome: "Clientes ativos",
    categoria: "Clientes",
    atualizado: "09/06/2026",
  },
];

export default function Reports() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Relatórios
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {metrics.map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.titulo}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                {metric.titulo}
              </Typography>

              <Typography variant="h4" fontWeight="bold">
                {metric.valor}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Relatório</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Atualizado em</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.nome}</TableCell>
                <TableCell>{report.categoria}</TableCell>
                <TableCell>{report.atualizado}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined">
                      Visualizar
                    </Button>
                    <Button size="small" variant="contained">
                      Exportar
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
          Resumo dos Relatórios
        </Typography>

        <Typography>
          Os relatórios consolidam vendas, estoque, clientes e indicadores para
          apoiar a análise administrativa da EXPL.
        </Typography>
      </Paper>
    </>
  );
}
