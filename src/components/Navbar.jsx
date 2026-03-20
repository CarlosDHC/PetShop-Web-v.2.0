import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-content">
        <Link to="/">
          <img src="/Imagem/icone.png" alt="PetShop Logo" className="navbar-icon" />
        </Link>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/agendar">Agendar</Link></li>
          <li><Link to="/consulta">Consultar</Link></li>
        </ul>
      </div>
    </nav>
  );
}