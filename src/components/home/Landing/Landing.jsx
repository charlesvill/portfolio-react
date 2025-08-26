import styles from './landing.module.css';

export function Landing() {
  return (
    <header className="landing">
      <div className={styles.greetCont}>
        <h1>My name is Charles Villalpando</h1>
        <p>
          Hello and welcome! I write and design full stack web applications.
        </p>
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
