import styles from './experience.module.css';

export function Experience() {
  return (
    <section id="experience">
      <header>
        <h3>Experience</h3>
      </header>
      <article className={styles.articleCont}>
        <h4>Software Development</h4>
        <ul>
          <li>
            <h5>Odin Project</h5>
            <ul>
              <li>Front-end and serverside development and deployment</li>
              <li>
                Clear, maintainable code following modern Object Oriented design
                patterns
              </li>
              <li>
                Speciality in designing REST API backends with relational
                database for CRUD functions{' '}
              </li>
              <li>
                Secure user authentication with JSON Web Tokens that is CDN
                deployment ready
              </li>
              <li>
                Designed, developed over 20 projects prioritizing vanilla js,
                html, css, react to build strong foundations for solving
                problems and designing critical software infastructure
              </li>
            </ul>
          </li>
        </ul>
      </article>
      <article className={styles.articleCont}>
        <h4>Education</h4>
        <ul>
          <li>
            <h5>Special Education Case Manager - Total Education Systems</h5>
            <ul>
              <li>
                Review, Plan, and Develop IEPs for over 95 students accross 8
                campuses in the LA region
              </li>
              <li>
                Prioritized high-impact tasks and streamlined processes for
                efficiency in meeting a high volume of cases
              </li>
            </ul>
          </li>
          <li>
            <h5>
              Special Education Teacher - Alliance College Ready Public Schools
            </h5>
            <ul>
              <li>
                Specialist in tailoring and accommodating curriculum to provide
                access to scholars with diverse learning needs
              </li>
              <li>
                Collaborated closely with team of stakeholders for each scholar
                unifying on education plan and methodology to refactor ed plan
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  );
}
