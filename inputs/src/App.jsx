
import './App.css'
import { useState } from 'react';

function App() {
  const[inputNome,  setInputNome] = useState('');
  const [inputIdade, setInputIdade] = useState(0);
  const[usuarios, setUsuarios] = useState([]);

  function mudouNome(event) {
    setInputNome(event.target.value)
  }
  function mudouIdade(event) {
    setInputIdade(event.target.value)
  }
  function cadastrarUsuario() {
        
        let usuario ={
          id: Date.now(),
          nome:inputNome,
          idade:inputIdade
        }
        console.log(usuario);
        setUsuarios([...usuarios,usuario])

        setInputNome('')
        setInputIdade('')
  }
  
  return (
    <>

      <h1>Inputs Controlados</h1>


      <div className="inputContainer">
        <label htmlFor="inpNome">Nome:</label>
        <input
          value={inputNome}
          onChange={mudouNome}
         id='inpNome' type="text"/>
      </div>

       <div className="inputContainer">
         <label htmlFor="inpIdade">Idade:</label>
         <input
         value={inputIdade}
         onChange={mudouIdade}
         type='text'id='inpIdade'/>
       </div>

       <button onClick={cadastrarUsuario}>Cadastrar</button>

      <div>
        <p>
          Nome Digitado: {inputNome}
        </p>
        <p>
          Idade: {inputIdade}
        </p>
        <h2> Usuarios:</h2>
        <div className='usuarios'>
          {
          usuarios.map((usuario,index)=>(
            <div key={usuario.id} className='usuario-container'>
            <p>{usuario.nome}</p>
            <p>{usuario.idade}</p>
            </div>
          ))}
          
        </div>
        
      </div>

    </>
  )
}

export default App
