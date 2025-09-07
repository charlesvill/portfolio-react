// import { ReactComponent as DownlodSVG } from '../../static/icons/download.svg';
import Logo from '../../static/icons/download.svg?react';
import styles from './header.module.css';

export function Header() {
  function handleDownload() {
    window.open('/static/resume.pdf', '_blank');
  }

  return (
    <header className={styles.siteHeader}>
      <a href="/" className={styles.logoCont} aria-label="Go to homepage">
        CV
      </a>

      <nav className={styles.nav} aria-label="Main navigation">
        <ul className={styles.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <button className={styles.resumeBtn} onClick={handleDownload}>
          Resume{' '}
          <Logo
            className={styles.dlSvg}
            aria-label="Download resume"
            role="img"
          />
        </button>
      </nav>
    </header>
  );
}
