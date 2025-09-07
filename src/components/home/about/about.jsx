import Markdown from 'react-markdown';
import { Skills } from '../skills/skills';

export function About() {
  const md = `
 I’m a full-stack web developer with hands-on experience building
        applications in **Node.js, React, PostgreSQL, and Prisma**. Before
        transitioning into software development, I spent five years as a
        **special education teacher through Teach For America**, where I
        developed the ability to break down complex ideas, adapt quickly to new
        challenges, and collaborate across diverse teams.\n\n As an educator, I
        learned to be **patient, detail-oriented, and resilient under pressure**
        — skills that now make me a thoughtful and reliable developer. I bring
        the same commitment I had in the classroom to writing clean,
        maintainable code, solving problems creatively, and building
        applications that are accessible and user-focused. My unique background
        gives me strong **communication skills, empathy for end-users, and the
        persistence to tackle tough technical challenges**, making me not just a
        programmer, but a collaborative problem-solver.
`;

  return (
    <section id="about">
      <h2>About me</h2>
      <Markdown>{md}</Markdown>
      <Skills />
    </section>
  );
}
