import React from "react";
import Bookshelves from "../../components/bookshelf/Bookshelves";
import AppRoutes from "../AppRoutes";
import styles from "./AppContent.module.scss";

const AppContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <Bookshelves />
      </div>
      <div className={styles.content}>
        <AppRoutes />
      </div>
    </section>
  );
};

export default AppContent;
