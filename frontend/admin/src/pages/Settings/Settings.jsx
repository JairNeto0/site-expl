import {
  Button,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export default function Settings() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Configurações
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 3,
          maxWidth: 760,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Dados da Empresa
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField label="Nome da empresa" defaultValue="Admin EXPL" fullWidth />
          <TextField
            label="E-mail administrativo"
            defaultValue="admin@expl.com"
            fullWidth
          />
          <TextField
            label="Telefone de contato"
            defaultValue="(11) 99999-0000"
            fullWidth
          />
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          Preferências do Sistema
        </Typography>

        <Stack spacing={1}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Receber notificações de novos pedidos"
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Alertar quando o estoque estiver baixo"
          />
          <FormControlLabel
            control={<Switch />}
            label="Permitir cadastro público de clientes"
          />
        </Stack>

        <Button variant="contained" sx={{ mt: 3 }}>
          Salvar Configurações
        </Button>
      </Paper>
    </>
  );
}
