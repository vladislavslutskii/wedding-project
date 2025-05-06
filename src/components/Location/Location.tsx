import location from "@assets/locationImage.png";
import styles from "./Location.module.scss";

const Location = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={location.toString()}
          alt="Holding Hands"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>location</p>
        <p className={styles.address}>
          Ждём вас по адресу:
          <br />
          г. Гродно
          <br />
          Студенческая улица, 2,
        </p>
        <a
          href="https://yandex.by/maps/org/stanislavskiy/101246641603/?ll=23.840857%2C53.683348&z=16"
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
