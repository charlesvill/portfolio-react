import { Layout } from '../../components/homeLayoutNav/layoutNav';
import { Landing } from '../../components/home/Landing/Landing';
import { About } from '../../components/home/About';
import { Skills } from '../../components/home/Skills';
import { Experience } from '../../components/home/Experience';
import { Education } from '../../components/home/Education';

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
