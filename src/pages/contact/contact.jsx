import styles from './contact.module.css';
import { SiGmail, SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si';

export function Contact() {
  return (
    <section aria-labelledby="contact-heading">
      <header>
        <h2 id="contact-heading">Let{`'`}s Work Together!</h2>
      </header>

      <article className={styles.pageCont}>
        <div className={styles.contactsCont}>
          <h3>Primary Contact</h3>
          <div className={styles.primaryCont}>
            <SiGmail aria-hidden="true" />
            <a
              href="mailto:yourname@example.com?subject=Portfolio%20Inquiry&body=Hello!"
              target="_blank"
              rel="noreferrer"
            >
              Send me an Email
            </a>
          </div>

          <h3>Connect with me</h3>
          <ul className={styles.connectList}>
            <li className={styles.connectCont}>
              <SiLinkedin aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/charles-villalpando-732b61289"
                target="_blank"
                rel="noreferrer"
              >
                charles-villalpando
              </a>
            </li>
            <li className={styles.connectCont}>
              <SiGithub aria-hidden="true" />
              <a
                href="https://github.com/charlesvill"
                target="_blank"
                rel="noreferrer"
              >
                charlesvill
              </a>
            </li>
            <li className={styles.connectCont}>
              <SiInstagram aria-hidden="true" />
              <span>Coming Soon...</span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
