import './Body.css';
import React from 'react';
import SistemaSenha from './SistemaSenha';
import Galeria from './Galeria';

export default function Body() {
  return (
    <div className='body'>
      <div className='sistema-senha-container'>
        <SistemaSenha />
      </div>
      <div className='galeria-container'>
        <Galeria />
      </div>
    </div>
  )
}