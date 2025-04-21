import styles from "./Location.module.scss";
import locationImage from "@assets/1.jpg"; // Замени на свой путь или пропс

const Location = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={locationImage} alt="Holding Hands" className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Location</h2>
        <p className={styles.address}>
          Ждём вас по адресу:
          <br />
          г. Гродно
          <br />
          Студенческая улица, 2,
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Посмотреть на карте
        </a>
      </div>
      <div className={styles.halfBorder}></div>
    </div>
  );
};

export default Location;
