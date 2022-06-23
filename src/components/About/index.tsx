import styles from "./about.module.scss";

export function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutInfo}>
        <img src="http://github.com/ericDK89.png" alt="Eric Macedo" />
        <span>Nome: Eric Macedo</span>
        <span>Idade: 23 anos</span>
        <address>Cidade: São Paulo-SP</address>
        <span>Email: ericthr42@gmail.com</span>
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
