import React from 'react'
import './Conteudo.css'
import { Duck } from './Duck'

function Conteudo() {
  return (
    <div className='conteudo-container'>
        <p>
          Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.

        </p>

        <img className='imagem-conteudo' src="./image/Taylor3.jpeg" alt=""/>

        <p>
          Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.

        </p>
        <Duck/>
    </div>
  )
}

export default Conteudo

