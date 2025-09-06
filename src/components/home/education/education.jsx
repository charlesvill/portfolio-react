import styles from './education.module.css';

export function Education() {
  return (
    <section id="education">
      <header>
        <h3>Schooling</h3>
      </header>
      <article className={styles.articleCont}>
        <div className={styles.headingBox}>
          <h4 className={styles.heading}>
            University of California, Los Angeles (UCLA)
          </h4>
          <h5>Bachelors</h5>
        </div>
        <div className={styles.contentBox}>
          <ul>
            <li className={styles.listItem}>
              B.A. Philosophy w/ Cum Laude and Departmental Honors; GPA: 3.72
            </li>
            <li className={styles.listItem}>
              Mastered critical thinking methodology for solving problems and
              simplifying complex ideas for effective collaboration
            </li>
          </ul>
        </div>
      </article>
      <article className={styles.articleCont}>
        <div className={styles.headingBox}>
          <h4 className={styles.heading}>
            {' '}
            Seeking Opportunities For MS Comp Sci
          </h4>
          <h5>Masters</h5>
        </div>
        <div className={styles.contentBox}>
          <ul>
            <li className={styles.listItem}>
              Interested fields include LLMs, embedded systems and low level
              languages such as Rust and C++ for critical runtime environments
            </li>
            <li className={styles.listItem}>
              Prioritizing hybrid programs to continue to tend to clients and
              projects while furthering my education
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
