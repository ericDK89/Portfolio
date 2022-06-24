import { gql, useQuery } from "@apollo/client";
import { Project } from "../Project";
import styles from "./projects.module.scss";

export interface GetProjectsQuery {
  projetos: [
    {
      id: string;
      image: {
        url: string;
      };
      linkToSite: string;
      title: string;
      description: string;
      linkToGithub: string;
    }
  ];
}

const GET_PROJECTS_QUERY = gql`
  query MyQuery {
    projetos {
      id
      linkToGithub
      linkToSite
      image {
        url
      }
      title
    }
  }
`;

export function Projects() {
  const { data, loading } = useQuery<GetProjectsQuery>(GET_PROJECTS_QUERY);

  console.log(data?.projetos);

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
              />
            );
          })}
        </div>
      )}
    </>
  );
}
