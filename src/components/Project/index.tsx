import styles from "./project.module.scss";

interface ProjectProps {
  image: string;
  linkToSite: string;
  title: string;
  description: string;
  linkToGithub: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
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

        <div className={styles.projectDivTitleAndDescription}>
          <header>
            <strong>{props.title}</strong>
            <span>{props.description}</span>
          </header>

          <div className={styles.projectDivTechs}>
            <strong>Tecnologias</strong>
            <div>
              <span>{props.tech1}</span>
              <span>{props.tech2}</span>
              <span>{props.tech3}</span>
              <span>{props.tech4}</span>
            </div>
          </div>

          <footer>
            <a href={props.linkToGithub} target={"_blank"}>
              Github do projeto
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
