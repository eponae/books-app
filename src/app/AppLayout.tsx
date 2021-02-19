import { FC } from "react";
import styles from "AppLayout.module.scss";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Bibliothèque</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <a href="https://github.com/eponae/books-app" className={styles.link}>
          Liste de livres - Alice R - Février 2021
        </a>
      </footer>
    </>
  );
};

export default AppLayout;
