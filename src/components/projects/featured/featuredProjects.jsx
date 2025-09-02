import { useFileParser } from '../../utilities/hooks/useParseMarkdown';
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
    <div className={styles.projectCont}>
      <div className={styles.contentCont}>
        <p className={styles.contentTitle}>{frontMatter.title}</p>
        <div className={styles.textWrapper}>
          <p className={styles.contentText}>{data.content}</p>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img
          src={frontMatter.imageSource}
          alt={`image of project ${frontMatter.title}`}
          className={styles.projectImg}
        />
        <div className={styles.cardShadow}></div>
      </div>
    </div>
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
        {projectData.map((element) => (
          <FeaturedProject data={element} key={element.title} />
        ))}
      </header>
    </section>
  );
}
