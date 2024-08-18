import React, { useState } from 'react';
import './SistemaSenha.css';

export default function SistemaSenha() {
  const [fila, setFila] = useState([]);
  const [senhaChamada, setSenhaChamada] = useState(null);

  const gerarSenha = (tipo) => {
    const numero = fila.length + 1;
    const novaSenha = { tipo, numero };
    setFila([...fila, novaSenha]);
    alert(`Senha ${tipo} ${numero} gerada!`);
  };

  const chamarSenha = () => {
    if (fila.length === 0) {
      setSenhaChamada("Fila Vazia");
      return;
    }

    const preferencial = fila.filter(senha => senha.tipo === "Preferencial").sort((a, b) => a.numero - b.numero);
    const normal = fila.filter(senha => senha.tipo === "Normal").sort((a, b) => a.numero - b.numero);

    let proximaSenha;
    if (preferencial.length > 0) {
      proximaSenha = preferencial[0];
      setFila(fila.filter(senha => senha !== proximaSenha));
    } else if (normal.length > 0) {
      proximaSenha = normal[0];
      setFila(fila.filter(senha => senha !== proximaSenha));
    }

    setSenhaChamada(`${proximaSenha.tipo} ${proximaSenha.numero}`);
  };

  return (
    <div className="container">
      <div className="sistema-senha">
        <div className="status-fila">
          <p>{fila.length === 0 ? 'Fila: Vazia' : `Fila: ${fila.length} senha(s) aguardando`}</p>
        </div>
        <div className="botoes">
          <button className="botao" onClick={() => gerarSenha('Normal')}>Gerar Senha Normal</button>
          <button className="botao" onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button>
          <button className="botao" onClick={chamarSenha}>Chamar Próxima Senha</button>
        </div>
        <div className="display">
          <p>{senhaChamada ? `Senha Chamada: ${senhaChamada}` : 'Nenhuma senha chamada'}</p>
        </div>
      </div>
    </div>
  );
}
