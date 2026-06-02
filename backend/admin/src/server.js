const express = require('express');
const cors = require('cors');
require('dotenv').config();

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: '🔥 Explosion Admin API está funcionando!' });
});

// Rotas
app.use('/api/admin/auth', require('./modules/auth/auth.routes'));

// Tratamento de erros (sempre por último)
app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🔥 Admin API rodando na porta ${PORT}`);
});