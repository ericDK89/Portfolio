import { Project } from "../Project";
import styles from './projects.module.scss';

export function Projects() {
  return(
    <div className={styles.projectsContainer}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  )
}