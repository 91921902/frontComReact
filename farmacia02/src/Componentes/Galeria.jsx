import React from 'react';
import './Galeria.css';

export default function Galeria() {
  return (
    <div className="container-galeria">
      <img 
        className="imagem-placa" 
        src="/image/farmarcia-placa.png" 
        alt="Placa da Farmácia" 
      />
      <div className="carrossel">
        <img 
          className="imagem" 
          src="/image/farmarcia-cartoes.png" 
          alt="Farmácia aceita cartões" 
        />
        <img 
          className="imagem" 
          src="/image/farmarcia.png" 
          alt="Interior da Farmácia" 
        />
        <img 
          className="imagem" 
          src="/image/farmarcia-camisetas.png" 
          alt="Camisetas personalizadas da Farmácia" 
        />
      </div>
    </div>
  )
}
