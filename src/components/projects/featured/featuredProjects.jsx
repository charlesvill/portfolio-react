import { useParseMarkdown } from '../../utilities/hooks/useParseMarkdown';

export function FeaturedProjects() {
  const projectData = useParseMarkdown('/path');
  if (!projectData) {
    return <p>Loading..</p>;
  }
  return (
    <section>
      <header>
        <h2>Featured Projects</h2>
      </header>
    </section>
  );
}
