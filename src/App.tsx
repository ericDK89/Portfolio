import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import styles from "./styles/wrapper.module.scss";

export function App() {
  return (
    <>
      <Navbar />
      <Home />

      <main className={styles.wrapper}>
        <About />
      </main>
    </>
  );
}
