import { useState } from 'react';
import styles from './experience.module.css';

const workData = {
  softwareDevelopment: {
    primaryHeading: 'Software Development',
    content: [
      {
        title: 'Odin Project',
        list: [
          'Front-end and serverside development and deployment',
          'Clear, maintainable code following modern Object Oriented design patterns',
          'Speciality in designing REST API backends with relational database for CRUD functions',
          'Secure user authentication with JSON Web Tokens that is CDN deployment ready',
          'Designed, developed over 20 projects prioritizing vanilla js,html, css, react to build strong foundations for solving problems and designing critical software infastructure',
        ],
      },
    ],
  },
  education: {
    primaryHeading: 'Education',
    content: [
      {
        title: 'Special Education Case Manager - Total Education Systems',
        list: [
          'Review, Plan, and Develop IEPs for over 95 students accross * campuses in the LA region ',
          'Prioritized high-impact tasks and streamlined processes for efficiency in meeting a high volume of cases',
        ],
      },
      {
        title:
          'Special Education Teacher - Alliance College Ready Public Schools',
        list: [
          'Specialist in tailoring and accommodating curriculum to provide access to scholars with diverse learning needs',
          'Collaborated closely with team of stakeholders for each scholar unifying on education plan and methodology to refactor ed plan',
        ],
      },
    ],
  },
};

function TabButton({ heading, currentArticle, handleSelection }) {
  return (
    <button
      onClick={handleSelection}
      id={heading}
      className={`${styles.heading} ${currentArticle === heading ? styles.active : ''}`}
    >
      {workData[heading].primaryHeading}
    </button>
  );
}
function ArticleComponent({ data }) {
  return (
    <div className={styles.contentWrapper}>
      <h5>{data.title}</h5>
      <ul className={styles.contentlist}>
        {data.content.map((listItem, index) => (
          <li className={styles.listItem} key={index}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Experience() {
  const [currentArticle, setArticle] = useState('softwareDevelopment');
  // const tabHeadings = Object.entries(workData).map(([key, prop]) => prop.primaryHeading);
  const dataKeys = Object.keys(workData);
  const articleContent = workData[currentArticle].content;

  function handleSelection(e) {
    const selection = e.target.id;
    if (currentArticle === selection) {
      return;
    }

    setArticle(selection);
  }

  // pulls the data for current article and creates component.  expects data object to have  key with the name stored in currentArticle state
  return (
    <section id="experience">
      <header>
        <h3>Experience</h3>
      </header>
      <article className={styles.articleCont}>
        <div className={styles.tabBox}>
          {dataKeys.map((heading) => (
            <TabButton
              heading={heading}
              currentArticle={currentArticle}
              handleSelection={handleSelection}
              key={heading}
            />
          ))}
        </div>
        <div className={styles.contentBox}>
          {articleContent.map((element) => (
            <ArticleComponent data={element} key={element.title} />
          ))}
        </div>
      </article>
    </section>
  );
}
