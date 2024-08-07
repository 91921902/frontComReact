import Conteudo from "../components/Conteudo"
import NavBar from "../components/Navbar"
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <NavBar/>
      <Conteudo/>
    </div>
  )
}

export default Home

