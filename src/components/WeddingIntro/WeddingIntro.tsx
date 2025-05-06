import back1 from "@assets/1.jpg";
import back2 from "@assets/2.jpg";
import Timer from "@components/Timer";
import React from "react";
import styles from "./WeddingIntro.module.scss";

export const WeddingIntro: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Мы выросли и теперь нам можно</p>
      <div className={styles.card}>
        <div className={styles.photoBlock}>
          <img src={back1} alt="Жених" className={styles.photo} />
          <p className={styles.label}>Жених</p>
        </div>

        <span className={styles.plus}>+</span>

        <div className={styles.photoBlock}>
          <img src={back2} alt="Невеста" className={styles.photo} />
          <p className={styles.label}>Невеста</p>
        </div>
      </div>
      {/* <p className={styles.title}>МЫ ВЫРОСЛИ, И ТЕПЕРЬ НАМ МОЖНО</p> */}

      <Timer></Timer>
    </div>
  );
};

export default WeddingIntro;
