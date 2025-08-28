import { FeaturedProjects } from '../../components/projects/featured/featuredProjects';
import { AdditionalProjects } from '../../components/projects/additional/additionalProjects';
import styles from './projects.module.css';

export function Projects() {
  return (
    <>
      <FeaturedProjects />
      <AdditionalProjects />
    </>
  );
}
