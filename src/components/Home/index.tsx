import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <section>
        <main className={styles.homeMain}>
          <p className={styles.typingAnimation}>Olá, me chamo Eric =)</p>
          <span>
            Front-End developer, apaixonado pelo mundo da programação. Tive meu
            primeiro contato com um computador aos 10 anos e desde então sempre
            tive interesse em tecnologia. 💻
          </span>
        </main>

        <footer className={styles.homeFooter}>
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
          <a href="#">Email</a>
        </footer>
      </section>

      <article className={styles.homeArticle}>
        <img
          src="https://c.tenor.com/UttC4AITYR4AAAAd/full-stack-developer.gif"
          alt="Front-End Developer"
        />
      </article>
    </div>
  );
}
