// import { ReactComponent as DownlodSVG } from '../../static/icons/download.svg';
import Logo from '../../static/icons/download.svg?react';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.logoCont}>CV</div>
      <nav className={styles.nav}>
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
        <button className={styles.resumeBtn}>
          Resume{' '}
          <Logo
            className={styles.dlSvg}
            aria-label="Download resume"
            role="img"
          />{' '}
        </button>
      </nav>
    </header>
  );
}
