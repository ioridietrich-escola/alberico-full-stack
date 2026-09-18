import { useState, useEffect } from 'react';
import './App.css';

export function App() {
  const [cartasAliadas, setCartasAliadas] = useState([]);
  const [cartasInimigas, setCartasInimigas] = useState([]);
  
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  
  const [cartaArrastadaId, setCartaArrastadaId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/cartas')
      .then((res) => res.json())
      .then((dados) => {
        setCartasAliadas(dados.aliadas);
        setCartasInimigas(dados.inimigas);
      })
      .catch((err) => console.error("Erro ao carregar as cartas:", err));
  }, []);

  const tratarDragStart = (e, carta) => {
    e.dataTransfer.setData('cartaDados', JSON.stringify(carta));
    setCartaArrastadaId(carta.id);
  };

  const tratarDragEnd = () => {
    setCartaArrastadaId(null);
  };

  const tratarDragOver = (e) => {
    e.preventDefault();
  };

  const tratarDrop = (e, indexSlot) => {
    e.preventDefault();
    setCartaArrastadaId(null);

    if (tabuleiro[indexSlot] !== null) return;

    const dadosString = e.dataTransfer.getData('cartaDados');
    if (!dadosString) return;

    const carta = JSON.parse(dadosString);

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indexSlot] = carta;
    setTabuleiro(novoTabuleiro);

    setCartasAliadas((prev) => prev.filter((c) => c.id !== carta.id));
  };

  return (
    <div>
      <h1>⚔️ Arena Faunadex - Duelo de Cartas ⚔️</h1>

      <div className="arena">
        {/* Mão Aliada */}
        <div className="mao-aliado">
          <h3>Aliados</h3>
          {cartasAliadas.map((carta) => (
            <div
              key={carta.id}
              className={`carta ${cartaArrastadaId === carta.id ? 'arrastando' : ''}`}
              draggable={true}
              onDragStart={(e) => tratarDragStart(e, carta)}
              onDragEnd={tratarDragEnd}
            >
              <img src={carta.img} alt={carta.nome} className="imagem-card" />
            </div>
          ))}
        </div>

        {/* Tabuleiro Matriz */}
        <div className="tabuleiro">
          {tabuleiro.map((slotCarta, index) => (
            <div
              key={index}
              className="slot"
              onDragOver={tratarDragOver}
              onDrop={(e) => tratarDrop(e, index)}
            >
              {slotCarta && (
                <div className="carta" draggable={false}>
                  <img src={slotCarta.img} alt={slotCarta.nome} className="imagem-card" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mão Inimiga */}
        <div className="mao-inimigo">
          <h3>Inimigos</h3>
          {cartasInimigas.map((carta) => (
            <div key={carta.id} className="carta inimigo">
              <img src={carta.img} alt={carta.nome} className="imagem-card" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
