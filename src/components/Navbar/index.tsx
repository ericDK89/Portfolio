import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import style from "./navbar.module.scss";

export function Navbar() {
  const [pageScrollY, setPageScrollY] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onChangeNavbarPosition = 25;

    function onScroll() {
      setPageScrollY(scrollY);
      if (pageScrollY >= onChangeNavbarPosition) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    }

    addEventListener("scroll", onScroll);
  }, [pageScrollY]);

  function navbarMobileFunctions(x: number, y: number) {
    scrollTo(x, y);
    setIsMobile(false);
  }

  return (
    <nav
      className={
        !isNavbarFixed ? style.navbarContainer : style.navbarContainerFixed
      }
    >
      <div className={style.navbarContent}>
        <div className={style.navbarInfo}>
          <h1>Eric Macedo</h1>
          <h2>Front-End Developer</h2>
        </div>

        <div className={style.navbarNavigationMobile}>
          {!isMobile ? (
            <button
              title="Abrir menu lateral"
              onClick={() => setIsMobile(true)}
            >
              <List size={32} />
            </button>
          ) : (
            <nav>
              <button
                title="Fechar menu lateral"
                onClick={() => setIsMobile(false)}
              >
                <X className={style.closeButton} size={32} color="#fff" />
              </button>
              <div className={style.navbarNavigationMobileDiv}>
                <button
                  type="button"
                  onClick={() => navbarMobileFunctions(0, 0)}
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => navbarMobileFunctions(0, 850)}
                >
                  Sobre
                </button>
                <button
                  type="button"
                  onClick={() => navbarMobileFunctions(0, 1600)}
                >
                  Projetos
                </button>
              </div>

              <footer>
                <a
                  href="https://www.linkedin.com/in/eric-macedo-dev/"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                </a>
                <a href="https://github.com/ericDK89" target={"_blank"}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
              </footer>
            </nav>
          )}
        </div>

        <div className={style.navbarNavigation}>
          <button type="button" onClick={() => navbarMobileFunctions(0, 0)}>
            Home
          </button>
          <button type="button" onClick={() => navbarMobileFunctions(0, 600)}>
            Sobre
          </button>
          <button type="button" onClick={() => navbarMobileFunctions(0, 1150)}>
            Projetos
          </button>
        </div>
      </div>
    </nav>
  );
}
