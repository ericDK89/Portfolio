import styles from "./about.module.scss";

export function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutInfo}>
        <img src="http://github.com/ericDK89.png" alt="Eric Macedo" />
        <span>Nome: <span>Eric Macedo</span></span>
        <span>Idade: <span>23 anos</span></span>
        <address>Cidade: <span>São Paulo-SP</span></address>
        <span>Email: <span>ericthr42@gmail.com</span></span>
        <span>WhatsApp: <span>(11) 95724-0038</span></span>
      </div>

      <footer className={styles.aboutFooter}>
        <strong>Habilidades</strong>
        <div className={styles.aboutSkills}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </div>
      </footer>
    </section>
  );
}
