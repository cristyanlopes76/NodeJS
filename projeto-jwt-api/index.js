const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./controllers/auth.controller');

const app = express();
const port = 3000;

// Configuração do middleware
app.use(bodyParser.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Conexão com o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
