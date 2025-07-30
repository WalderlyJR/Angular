const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./src/database');
const logger = require('./src/middlewares/logger');
const routes = require('./src/routes');

app.use(cors());

app.use(express.json());
app.use(logger); 

app.get('/', (req, res) => {
  res.send('O Restaurante está funcionando!');
});

app.use(routes);

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    
    // Inicia o servidor
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });