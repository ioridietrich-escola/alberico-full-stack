const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const cartasAliadas = [
  {
    id: 1,
    nome: 'Curupira',
    forca: { norte: 8, leste: 9, sul: 6, oeste: 2 },
    img: '/cartas/curupira.png'
  },
  {
    id: 2,
    nome: 'Lobo Guará',
    forca: { norte: 7, leste: 8, sul: 6, oeste: 5 },
    img: '/cartas/lobo_guara.png'
  },
  {
    id: 3,
    nome: 'Boitatá',
    forca: { norte: 9, leste: 9, sul: 4, oeste: 7 },
    img: '/cartas/boitata.png'
  }
];

const cartasInimigas = [
  {
    id: 101,
    nome: 'Cobra Naja',
    forca: { norte: 6, leste: 5, sul: 7, oeste: 4 },
    img: 'https://picsum.photos/id/1069/200/300'
  },
  {
    id: 102,
    nome: 'Crocodilo',
    forca: { norte: 9, leste: 8, sul: 6, oeste: 7 },
    img: 'https://picsum.photos/id/1084/200/300'
  }
];

app.get('/api/status', (req, res) => {
  res.json({ mensagem: "Backend Node 3SIS Operante!" });
});

app.get('/api/cartas', (req, res) => {
  res.json({
    aliadas: cartasAliadas,
    inimigas: cartasInimigas
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
