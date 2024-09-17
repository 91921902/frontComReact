import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Home() {
  const {usuarioLogado, usuarios, setUsuarios}=useContext(GlobalContext)

  function adicinarUsuario() {
    let usuario = {
      id: Date.now(),
      nome: "Capitão Ganso",
      email:"capitao@juliaroger.com"

    }
    setUsuarios([...usuarios,usuario])
  }
  return (
    <div>

      <NavBar />
      <h1>Home Página Do Site</h1>
        <p>
        {usuarioLogado}
        </p>

        <div>
          {
            usuarios.map((usuario) => (
              <div key={usuario.id}>
                <p>Nome:{usuario.nome}</p> 
                <p>E-mail:{usuario.email}</p> 
                <p>{usuario.id}</p> 

              </div>
            ))
          }
        </div>
        <div>
          <button onClick={adicinarUsuario}>Adicionar Usuario</button>
        </div>

      <p>oooooooooooooooooooooooooooooooooooooooooooppppppppppppppppppppppppppplllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllkkkkkkkkkkkkkkkkkkkkk</p>
      <p>ndkjxhudkqhwdqwkcbkbkbckcqbxcjhbascsahcbaqsbgcqwudwhdbcbcb bhbchcsadxbjhbhsabxasbxhdhbasbcasbjhsbaxcasbcksab</p>

    </div>
  )
}

