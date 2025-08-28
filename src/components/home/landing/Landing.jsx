import styles from './landing.module.css';
import { DiReact, DiNodejs, DiPostgresql } from 'react-icons/di';

export function Landing() {
  return (
    <header className={styles.landing}>
      <div className={styles.greetCont}>
        <div className={styles.headingCont}>
          <h1 className={styles.introText}>
            <span className={styles.im}>Hello there, I’m</span>
            <span className={styles.name}>Charles Villalpando!</span>
          </h1>
          <p className={styles.tagline}>
            I design and write full stack web applications
            <span className={styles.iconCont}>
              <DiReact />
              <DiNodejs />
              <DiPostgresql />
            </span>{' '}
          </p>
        </div>
      </div>

      <div className={styles.navCont}>
        <nav aria-label="Home sections">
          <ul>
            <li>
              <a href="#about">Summary</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
        </nav>

        <div className={styles.imgCont}>
          <img
            src="/static/images/stylizedPortrait.png"
            alt="Stylized portrait of Charles Villalpando"
          />
        </div>
      </div>
    </header>
  );
}
