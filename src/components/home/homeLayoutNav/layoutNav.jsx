import styles from './layoutNav.module.css';
export function Layout({ children }) {
  return <div className={styles.layoutCont}>{children}</div>;
}
