import './Header.css'
import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <div className='header-container'>
       
      <h1>BEM VINDOS A NOVA FARMÁRCIA!</h1>
       <Logo />
      <h2>A FARMÁCIA DA MÁRCIA</h2>
      <p>Sob nova direção!</p>

    </div>
  )
}

