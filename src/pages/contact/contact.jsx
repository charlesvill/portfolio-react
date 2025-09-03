import styles from './contact.module.css';
import { SiGmail, SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si';

export function Contact() {
  return (
    <section>
      <heading>
        <h2>{`Let's Work Together!`}</h2>
      </heading>
      <article>
        <div className={styles.contactsCont}>
          <h4>Primary Contact</h4>
          <div className={styles.primaryCont}>
            <SiGmail />
            <a href="mailto:yourname@example.com?subject=Portfolio%20Inquiry&body=Hello!">
              Send me an Email
            </a>
          </div>
          <h6>Connect with me</h6>
          <div className={styles.connectCont}>
            <SiLinkedin />
            <a href="www.linkedin.com/in/charles-villalpando-732b61289">
              charles-villalpando
            </a>
          </div>
          <div className={styles.connectCont}>
            <SiInstagram />
            <span>Coming Soon...</span>
          </div>
          <div className={styles.connectCont}>
            <SiGithub />
            <a href="https://github.com/charlesvill">charlesvill</a>
          </div>
        </div>
      </article>
    </section>
  );
}
