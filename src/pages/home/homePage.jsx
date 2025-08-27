import { Layout } from '../../components/homeLayoutNav/layoutNav';
import { Landing } from '../../components/home/landing/Landing';
import { About } from '../../components/home/about/about';
import { Skills } from '../../components/home/skills/skills';
import { Experience } from '../../components/home/experience/experience';
import { Education } from '../../components/home/education/education';

export function HomePage() {
  return (
    <Layout>
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Education />
    </Layout>
  );
}
