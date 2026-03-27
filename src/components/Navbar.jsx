import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importação como objeto

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <img src="/Imagem/icone.png" alt="logo" className={styles.navbarIcon} />
        <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Início</Link></li>
            <li><Link to="/agendar" className={styles.navLink}>Agendar</Link></li>
            <li><Link to="/consulta" className={styles.navLink}>Consulta</Link></li>
            <li><Link to="/login" className={styles.navLink}>Login</Link></li>
            <li><Link to="/perfil" className={styles.navLink}>Perfil</Link></li>
        </ul>
    </nav>
  );
}