import styles from "./project.module.scss";

interface ProjectProps {
  image: string;
  linkToSite: string;
  title: string;
  description: string;
  linkToGithub: string;
}

export function Project(props: ProjectProps) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectContent}>
        <a
          href={props.linkToSite}
          title="Clique para visitar o site"
          target={"_blank"}
        >
          <img src={props.image} />
        </a>

        <div className={styles.projectDivFlex}>
          <header>
            <strong>{props.title}</strong>
            <span>{props.description}</span>
          </header>

          <footer>
            <a href={props.linkToGithub} target={"_blank"}>Github do projeto</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
