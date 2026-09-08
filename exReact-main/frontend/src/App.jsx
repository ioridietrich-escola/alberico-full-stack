import { useState, useEffect } from 'react';
import './App.css';

export function App() {
  const [cartasAliadas, setCartasAliadas] = useState([]);
  const [cartasInimigas, setCartasInimigas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/cartas')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCartasAliadas(dados.aliadas);
        setCartasInimigas(dados.inimigas);
      })
      .catch((erro) => console.error("Erro ao buscar as cartas:", erro));
  }, []);

  return (
    <div>
      <h1>Arena Faunadex</h1>

      {/* Estrutura da Arena */}
      <div className="arena">
        
        {/* Coluna Esquerda */}
        <div className="mao-aliado">
          <h3>Aliados</h3>
          {cartasAliadas.map((carta) => (
            <div className="carta" key={carta.id}>
              {carta.nome}
            </div>
          ))}
        </div>

        {/* Centro */}
        <div className="tabuleiro">
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
          <div className="slot"></div>
        </div>

        {/* Coluna Direita */}
        <div className="mao-inimigo">
          <h3>Inimigos</h3>
          {cartasInimigas.map((carta) => (
            <div className="carta inimigo" key={carta.id}>
              {carta.nome}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
