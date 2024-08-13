
import { useState } from 'react';
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  let cont = 0;

  function tratarClique() {
    cont++;
    alert('cont' + cont);

  }

  function incrementarState() {
    cont++;
   setContador(contador + 1);

  }

  return (
    <>
    <h1>Teste Botão</h1>
    <p>A vida é uma maratona sem fim. Não fique parado por muito tempo; ao invés disso, concentre-se no próximo ponto.</p>
      <button onClick={tratarClique}>Clique</button>
    
      <div>
       {cont} 
      </div>

      <button onClick={incrementarState}>Incrementar State</button>
      
      <div>
        {contador}
      </div>
      

    </>
  )
}

export default App
