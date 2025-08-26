import styles from './landing.module.css';

export function Landing() {
  return (
    <section className="landing">
      <div className={styles.greetCont}>
        <div>
          <h3>H!</h3>
          <h4>My name is Charles Villalpando</h4>
        </div>
        <div>
          <span>I write and design full stack web applications</span>
        </div>
      </div>
      <div className={styles.navCont}>
        <nav>
          <a href="#about">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>
        <div className={styles.imgCont}>
          <img
            src="/static/images/stylizedPortrait.png"
            alt="stylized picture of Charles"
          />
        </div>
      </div>
    </section>
  );
}
