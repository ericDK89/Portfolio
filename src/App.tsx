import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import styles from "./styles/app.module.scss";

export function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />

      <main className={styles.wrapper}>
        <About />
      </main>

      <section className={styles.projects}>
        <Projects />
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
