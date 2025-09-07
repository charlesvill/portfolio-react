import { useState } from 'react';
import styles from './experience.module.css';

const workData = {
  softwareDevelopment: {
    primaryHeading: 'Software Development',
    content: [
      {
        title: 'Odin Project',
        list: [
          'Speciality in development and deployment of Front-end and serverside apps conforming to modern Object Oriented design patterns that are both clear and maintainable',
          'Designed and tested REST API backends with relational database for reliable CRUD functions',
          'Secured critial user data with authentication through JSON Web Tokens facilitating minimal refactor to deploy on CDN platforms',
          'Designed, developed over 20 projects prioritizing vanilla JavaScript, SQL, HTML, CSS and React to build strong foundations for greater adaptability to different tech stacks',
          'Ai assisted but not led - I take great pride in what I have architected and built, no vibe coders here',
        ],
      },
    ],
  },
  education: {
    primaryHeading: 'Educator',
    content: [
      {
        title: 'Special Education Case Manager - Total Education Systems',
        list: [
          'Review, Plan, and Develop IEP (legal document outlining school plan to meet student needs) for over 95 students accross 8 campuses in the LA region under federal mandated timelines',
          'Prioritized high-impact tasks and streamlined processes for efficiency in meeting a high volume of cases',
        ],
      },
      {
        title:
          'Special Education Teacher - Alliance College Ready Public Schools',
        list: [
          'Specialist in tailoring and accommodating curriculum to provide access to scholars with diverse learning needs',
          'Collaborated closely with team of stakeholders for each scholar unifying on education plan and effectively communicate expectations to meet student needs',
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
    <>
      <h5>{data.title}</h5>
      <ul className={styles.contentlist}>
        {data.list.map((listItem, index) => (
          <li className={styles.listItem} key={index}>
            {listItem}
          </li>
        ))}
      </ul>
    </>
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
        <h2>Experience</h2>
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
