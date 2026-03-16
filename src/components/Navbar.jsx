import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <div className="navbar-content">
            <img src="/Imagem/icone.png" alt="icone" className="navbar-icon" />
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/agendar">Agendamento</Link></li>
                <li><Link to="/consulta">Consulta</Link></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
    </nav>
  );
}