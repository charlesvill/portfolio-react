import {
  SiReact,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiCloudinary,
  SiKoyeb,
} from 'react-icons/si';
import styles from './skills.module.css';

export function Skills() {
  return (
    <section id="skills">
      <h5>Technologies I speak:</h5>
      <ul className={styles.skillList}>
        <li>
          <SiReact /> React
        </li>
        <li>
          <SiJavascript /> Javascript
        </li>
        <li>
          <SiExpress />
          Express
        </li>
        <li>
          <SiNodedotjs />
          Nodejs
        </li>
        <li>
          <SiPostgresql />
          PostgresSql
        </li>
        <li>
          <SiPrisma />
          Prisma
        </li>
        <li>
          <SiCloudinary />
          Cloudinary
        </li>
        <li>
          <SiKoyeb />
          Koyebd
        </li>
      </ul>
    </section>
  );
}
