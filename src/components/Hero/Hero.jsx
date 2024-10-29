import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Sou Alan Guerra</h1>
        <p className={styles.description}>
          Sou Engenheiro de Software Sênior, estou atuando como PJ por 7 anos com uma grande
          experiência em desenvolvimento web.
        </p>
        <a href="mailto:contato@esalanguerra.com.br" className={styles.contactBtn}>
          Falar Comigo
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
