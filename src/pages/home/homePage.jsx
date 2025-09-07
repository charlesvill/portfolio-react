import { Layout } from '../../components/home/homeLayoutNav/layoutNav';
import { Landing } from '../../components/home/landing/Landing';
import { About } from '../../components/home/about/about';
import { Experience } from '../../components/home/experience/experience';
import { Education } from '../../components/home/education/education';

export function HomePage() {
  return (
    <Layout>
      <Landing />
      <About />
      <Experience />
      <Education />
    </Layout>
  );
}
