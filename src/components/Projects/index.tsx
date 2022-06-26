import { useGetProjectsQueryQuery } from "../../graphql/generated";
import { Project } from "../Project";
import styles from "./projects.module.scss";

export function Projects() {
  const { data, loading } = useGetProjectsQueryQuery();

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.projectsContainer}>
          {data?.projetos.map((data) => {
            return (
              <Project
                key={data.id}
                image={data.image.url}
                linkToSite={data.linkToSite}
                title={data.title}
                description={data.description}
                linkToGithub={data.linkToGithub}
                tech1={data.tech1}
                tech2={data.tech2}
                tech3={data.tech3}
                tech4={data.tech4}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
