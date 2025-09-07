import styles from './footer.module.css';
import { SiGithub } from 'react-icons/si';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/charlesvill" target="_blank" rel="noreferrer">
        Designed {'&'} Built by Charles Villalpando
        <SiGithub />
      </a>
    </footer>
  );
}
