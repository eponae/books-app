import React from "react";
import Bookshelves from "../../components/bookshelf/Bookshelves";
import AppRoutes from "../AppRoutes";
import styles from "./AppContent.module.scss";

const AppContent = () => {
  return (
    <section className={styles.container}>
      <nav className={styles.menu}>
        <Bookshelves />
      </nav>
      <div className={styles.content}>
        <AppRoutes />
      </div>
    </section>
  );
};

export default AppContent;
