import { Grid, Paper, Typography } from "@mui/material";

const cards = [
  { titulo: "Energéticos", valor: 24 },
  { titulo: "Pedidos", valor: 158 },
  { titulo: "Clientes", valor: 320 },
  { titulo: "Faturamento", valor: "R$ 12.450" },
];

export default function Dashboard() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.titulo}>
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
                {card.titulo}
              </Typography>

              <Typography variant="h3" fontWeight="bold">
                {card.valor}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Resumo Geral
        </Typography>

        <Typography>
          O sistema possui atualmente 24 energéticos cadastrados, 158 pedidos
          realizados e um faturamento estimado em R$ 12.450 no período.
        </Typography>
      </Paper>
    </>
  );
}
