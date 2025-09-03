import { useFileParser } from '../../utilities/hooks/useParseMarkdown';
import Markdown from 'react-markdown';
import styles from './additionalProjects.module.css';

const markdownFiles = import.meta.glob('../../../content/additional/**/*.md', {
  eager: true,
});

function AdditionalProject({ data }) {
  const frontMatter = data.frontmatter;
  return <article></article>;
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
      <div className={styles.projectCollection}></div>
      {projectData.map((element, index) => {
        <AdditionalProject data={element} key={index} />;
      })}
    </section>
  );
}
