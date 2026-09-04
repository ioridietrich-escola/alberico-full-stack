const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


const cartasAliadas = [
  { id: 1, nome: "Urso Alpha", forca: 9, img: "https://placebear.com/200/300" },
  { id: 2, nome: "Lobo Guará", forca: 7, img: "https://picsum.photos/id/237/200/300" },
  { id: 3, nome: "Águia Real", forca: 8, img: "https://picsum.photos/id/1024/200/300" },
  { id: 4, nome: "Mico Leão Dourado", forca: 5, img: "https://picsum.photos/id/1062/200/300" },
  { id: 5, nome: "Jaguar Pintado", forca: 10, img: "https://picsum.photos/id/1074/200/300" }
];

const cartasInimigas = [
  { id: 101, nome: "Cobra Naja", forca: 6, img: "https://picsum.photos/id/1069/200/300" },
  { id: 102, nome: "Crocodilo do Nilo", forca: 9, img: "https://picsum.photos/id/1084/200/300" },
  { id: 103, nome: "Escorpião Rei", forca: 7, img: "https://picsum.photos/id/1060/200/300" },
  { id: 104, nome: "Tubarão Branco", forca: 10, img: "https://picsum.photos/id/1011/200/300" },
  { id: 105, nome: "Hiena Voraz", forca: 5, img: "https://picsum.photos/id/1025/200/300" }
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
