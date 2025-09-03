import { useFileParser } from '../../utilities/hooks/useParseMarkdown';
import Markdown from 'react-markdown';
import styles from './featuredProjects.module.css';

const markdownFiles = import.meta.glob('../../../content/featured/**/*.md', {
  eager: true,
});
const images = import.meta.glob(
  '../../../content/featured/**/*.{png,jpg,jpeg,svg}',
  { eager: true }
);

// featProjFn

function FeaturedProject({ data }) {
  const frontMatter = data.frontmatter;
  return (
    <article className={styles.projectCont}>
      <div className={styles.contentCont}>
        <h3 className={styles.contentTitle}>{frontMatter.title}</h3>
        <div className={styles.textWrapper}>
          <Markdown>{data.content}</Markdown>
        </div>
      </div>
      <figure className={styles.imgWrapper}>
        <img
          src={frontMatter.imageSource}
          alt={`Screenshot of project ${frontMatter.title}`}
          className={styles.projectImg}
        />
        <div className={styles.cardShadow} aria-hidden="true"></div>
      </figure>
    </article>
  );
}

export function FeaturedProjects() {
  const { projectData } = useFileParser({ markdownFiles, images });
  if (!projectData) {
    return <p>Loading..</p>;
  }
  return (
    <section>
      <header>
        <h2>Featured Projects</h2>
      </header>
      {projectData.map((element, index) => (
        <FeaturedProject data={element} key={index} />
      ))}
    </section>
  );
}
