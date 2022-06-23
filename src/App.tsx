import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import styles from "./styles/app.module.scss";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <main className={styles.wrapper}>
      <span className={styles.aboutSpan}>Sobre</span>
        <About />
      </main>
      
      <span className={styles.projectsSpan}>Projetos</span>
      <section className={styles.projects}>
        <Projects />
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
}
