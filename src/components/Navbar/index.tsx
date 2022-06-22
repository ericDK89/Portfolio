import style from "./navbar.module.scss";

export function Navbar() {
  return (
    <nav className={style.navbarContainer}>
      <div className={style.navbarContent}>
        <div className={style.navbarInfo}>
          <h1>Eric Macedo</h1>
          <h2>Front-End Developer</h2>
        </div>

        <div className={style.navbarNavigation}>
          <a href="#" className={style.navbarSelectedLink}>Home</a>
          <a href="#">Sobre</a>
          <a href="#">Projetos</a>
        </div>
      </div>
    </nav>
  );
}

{
  /* <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" />
        </div> */
}
