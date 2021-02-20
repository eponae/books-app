import { FC } from "react";
import styles from "./AppLayout.module.scss";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Bibliothèque</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <a href="https://github.com/eponae/books-app" className={styles.link}>
          Voir le code source
        </a>
      </footer>
    </>
  );
};

export default AppLayout;
