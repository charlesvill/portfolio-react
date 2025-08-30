import { useFileParser } from '../../utilities/hooks/useParseMarkdown';

const markdownFiles = import.meta.glob('../../../content/featured/**/*.md', {
  eager: true,
});
const images = import.meta.glob(
  '../../../content/featured/**/*.{png,jpg,jpeg,svg}',
  { eager: true }
);

// featProjFn

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
          <div key={element.frontmatter.title}>
            <img src={element.frontmatter.imageSource} />
            {element.frontmatter.title}
            <p>{element.content}</p>
          </div>
        ))}
      </header>
    </section>
  );
}
