const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./controllers/products.controller');

const app = express();
const port = 3000;

// Configuração do middleware
app.use(bodyParser.json());

// Rotas
app.use('/produtos', productRoutes);

// Conexão com o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
