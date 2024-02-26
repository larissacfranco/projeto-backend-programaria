const express = require('express');
const router  = express.Router();

const app     = express();
const porta   = 3333;

const mulheres = [
  {
    nome   : 'Simara Conceição',
    imagem : 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e instrutora'
  },
  {
    nome   : 'Iana Chan',
    imagem : 'https://bit.ly/3JCXBqP',
    minibio: 'Fundadora da PrograMaria'
  },
  {
    nome   : 'Nina da Hora',
    imagem : 'https://bit.ly/3FK9Faz',
    minibio: 'Hacker antiracista'
  }
]

function mostraMulheres(request,response) {
  response.json(mulheres)//enviar pra internet varias informações
}

function mostraPorta() {
  console.log('Servidor criado e rodando na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))//rota faça o endereço get
app.listen(porta , mostraPorta);
