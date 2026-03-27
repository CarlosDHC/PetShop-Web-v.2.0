import { Link } from 'react-router-dom'; 
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} PetShop - Todos os direitos reservados.
      </p>
      <nav className={styles.footerNav}>
        <ul className={styles.footerList}>
         <a href="/sobre">Sobre</a>
          <a href="/privacidade">Privacidade</a></ul>
      </nav>
    </footer>
  );
}