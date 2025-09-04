import styles from './education.module.css';

export function Education() {
  return (
    <section id="education">
      <header>
        <h3>Schooling</h3>
      </header>
      <article className={styles.articleCont}>
        <h4>Masters</h4>
        <ul>
          <li>
            <h5>Currently Seeking Opportunities for MS Comp Sci</h5>
            <ul>
              <li>
                Interested fields include LLMs and C++ for critical runtime
                environments
              </li>
            </ul>
          </li>
        </ul>
      </article>
      <article>
        <h4>Bachelors</h4>
        <ul>
          <li>
            <h5>University of California, Los Angeles (UCLA)</h5>
            <ul>
              <li>B.A. Philosophy w/ Cum Laude and Departmental Honors</li>
              <li>GPA: 3.72</li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  );
}
