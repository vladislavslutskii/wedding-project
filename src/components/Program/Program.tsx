import { Cake, Champagne, Clock, Plate, Rings } from "@assets/icons";
import styles from "./Program.module.scss";

const Program = ({}) => {
  return (
    <div className={styles.program}>
      <p className={styles.titleEn}>Program Of The Day</p>
      <p className={styles.titleRu}>Программа дня</p>

      <div className={styles.item}>
        <div className={styles.icon}>
          <Clock width={90} height={80}></Clock>
        </div>
        <p className={styles.time}>14:30</p>
        <p className={styles.text}>Сбор гостей</p>
      </div>

      <div className={styles.item}>
        <div className={styles.icons}>
          <Champagne width={90} height={80}></Champagne>
        </div>
        <p className={styles.time}>15:00</p>
        <p className={styles.text}>Фуршет</p>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <Rings width={90} height={80}></Rings>
        </div>
        <p className={styles.time}>15:30</p>
        <p className={styles.text}>Церемония</p>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Plate width={90} height={80}></Plate>
        </div>
        <p className={styles.time}>16:30</p>
        <p className={styles.text}>Банкет</p>
      </div>
      <div className={styles.item}>
        <div className={styles.icon}>
          <Cake width={90} height={80}></Cake>
        </div>
        <p className={styles.time}>24:00</p>
        <p className={styles.text}>Завершение дня</p>
      </div>
      <div className={styles.halfBorder}></div>
    </div>
  );
};

export default Program;
