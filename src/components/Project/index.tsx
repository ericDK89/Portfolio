import styles from "./project.module.scss";

export function Project() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectContent}>
        <a
          href="https://feedway.vercel.app/"
          title="Clique para visitar o site"
          target={"_blank"}
        >
          <img src="https://user-images.githubusercontent.com/68076508/173263117-e64ec633-9364-42a0-b964-c6b792bd44ed.png" />
        </a>

        <div className={styles.projectDivFlex}>
          <header>
            <strong>Feed Way</strong>
            <span>
              Página que permite a criação de posts e de comentários. Também
              sendo possível dar quantos likes desejar e deletar os comentários.
            </span>
          </header>

          <main>
            <strong>Tecnologias</strong>
            <div>
              <span>
                <img src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" />
                VITE
              </span>
              <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" />
                REACT
              </span>
              <span>
                <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png" />
                TYPESCRIPT
              </span>
              <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" />
                SASS
              </span>
              <span>
                <img src="https://avatars.githubusercontent.com/u/47899903?s=280&v=4" />
                MIRAGEJS
              </span>
              <span>
                <img src="https://plugins.jetbrains.com/files/8320/140213/icon/pluginIcon.png" />
                UUID
              </span>
              <span>
                <img src="https://avatars.githubusercontent.com/u/14921202?s=200&v=4" />
                DATE-FNS
              </span>
            </div>
          </main>

          <footer>
            <a href="#">Link para o Github do projeto</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
