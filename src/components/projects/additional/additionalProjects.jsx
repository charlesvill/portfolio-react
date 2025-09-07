import { useFileParser } from '../../utilities/hooks/useParseMarkdown';
import Markdown from 'react-markdown';
import styles from './additionalProjects.module.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

const markdownFiles = import.meta.glob('../../../content/additional/**/*.md', {
  eager: true,
});

function AdditionalProject({ data }) {
  const frontMatter = data.frontmatter;
  return (
    <article className={styles.projectCont}>
      <div className={styles.contentCont}>
        <p className={styles.contentTitle}>{frontMatter.title}</p>
        <div className={styles.contextText}>
          <Markdown>{data.content}</Markdown>
        </div>
        <ul className={styles.techList}>
          {frontMatter.tech.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className={styles.linkCont}>
        <div className={styles.linkWrapper}>
          <a href={frontMatter.external}>
            <FaExternalLinkAlt />
          </a>
          <a href={frontMatter.github}>
            <SiGithub />
          </a>
        </div>
      </div>
    </article>
  );
}

export function AdditionalProjects() {
  const { projectData } = useFileParser({ markdownFiles });

  if (!projectData) {
    return <p>Loading..</p>;
  }

  return (
    <section>
      <header>
        <h2>Additional Projects</h2>
      </header>
      <div className={styles.projectCollection}>
        {projectData.map((element, index) => (
          <AdditionalProject data={element} key={index} />
        ))}
      </div>
    </section>
  );
}
