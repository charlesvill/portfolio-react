import styles from './education.module.css';

export function Education() {
  return (
    <>
      <section id="education">
        <header>
          <h2>Schooling</h2>
        </header>{' '}
        <div className={styles.parentWrapper}>
          <article className={styles.articleCont}>
            <div className={styles.headingBox}>
              <h5 className={styles.heading}>
                University of California, Los Angeles (UCLA)
              </h5>
              <p>Bachelor{`'`}s</p>
            </div>
            <div className={styles.contentBox}>
              <ul>
                <li className={styles.listItem}>
                  B.A. Philosophy w/ Cum Laude and Departmental Honors; GPA:
                  3.72
                </li>
                <li className={styles.listItem}>
                  Mastered critical thinking methodology for solving problems
                  and simplifying complex ideas for effective collaboration
                </li>
              </ul>
            </div>
          </article>
          <article className={styles.articleCont}>
            <div className={styles.headingBox}>
              <h5 className={styles.heading}>
                {' '}
                Seeking Opportunities For MS Comp Sci
              </h5>
              <p>Master{`'`}s</p>
            </div>
            <div className={styles.contentBox}>
              <ul>
                <li className={styles.listItem}>
                  Interested fields include LLMs, embedded systems and
                  performant languages such as Rust {'&'} C++ for critical
                  runtime environments
                </li>
                <li className={styles.listItem}>
                  Prioritizing hybrid programs to continue to tend to clients
                  and projects while furthering my education
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
