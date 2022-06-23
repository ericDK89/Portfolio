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
