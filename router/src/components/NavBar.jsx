import './NavBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/musicas">Músicas</Link>
      <Link to="/filmes">Filme</Link>
      <Link to="/seriados">Seriados</Link>
    </nav>
  )
}
