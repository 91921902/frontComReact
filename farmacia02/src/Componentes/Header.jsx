import './Header.css'
import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <Logo />
      </div>
    <h1>BEM VINDOS A NOVA FARMÁRCIA!</h1>
    <h2>A Farmácia Da Márcia</h2>
    <p>Sob nova direção!</p>
   
    </div>
  )
}