import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContact}>
        <a href="https://www.linkedin.com/in/eric-macedo-dev/" target={"_blank"}>
          <img src="https://img.icons8.com/doodle/344/linkedin--v2.png" />
        </a>
        <a href="https://github.com/ericDK89" target={"_blank"}>
          <img src="https://img.icons8.com/doodle/344/github--v1.png" />
        </a>
        <a href="mailto: ericthr42@gmail.com">
          <img src="https://img.icons8.com/doodle/344/gmail.png" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511957240338" target={"_blank"}>
          <img src="https://img.icons8.com/doodle/344/whatsapp.png" />
        </a>
      </div>

      <footer>
        <span>Feito por Eric Macedo 🌌</span>
      </footer>
    </div>
  );
}
