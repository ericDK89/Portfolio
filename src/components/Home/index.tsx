import rocketImg from "../../assets/foguete.png";
import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <section>
        <main className={styles.homeMain}>
          <p className={styles.typingAnimation}>
            Olá, me chamo Eric! <img src={rocketImg} />
          </p>
          <span>
            Front-End developer, apaixonado pelo mundo da programação. Tive meu
            primeiro contato com um computador aos 10 anos e desde então sempre
            tive interesse em tecnologia. 💻
          </span>
        </main>

        <footer className={styles.homeFooter}>
          <a href="https://www.linkedin.com/in/eric-macedo-dev/" target={"_blank"}>LinkedIn</a>
          <a href="https://github.com/ericDK89" target={"_blank"}>Github</a>
          <a href="mailto: ericthr42@gmail.com">Email</a>
          <a href="https://api.whatsapp.com/send?phone=5511957240338" target={"_blank"}>WhatsApp</a>
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
