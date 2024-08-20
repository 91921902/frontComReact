import React from 'react';
import './Galeria.css';

export default function Galeria() {
  return (
   
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
    
  )
}
