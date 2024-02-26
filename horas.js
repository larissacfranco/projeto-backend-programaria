const express = require('express');
const router  = express.Router();

const app     = express();
const porta   = 3333;

function mostraPorta() {
  console.log('Servidor criado e rodando na porta ', porta);
}

function mostraHoras(request, response) {
  const data = new Date()
  const horas = data.toLocaleTimeString('pt-BR')
  response.send(horas)
}

app.use(router.get('/horas', mostraHoras))
app.listen(porta , mostraPorta);