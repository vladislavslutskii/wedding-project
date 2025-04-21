import backGround from "@assets/backPhoto.jpg";
import backGround2 from "@assets/backPhoto2.jpg";
import downArrow from "@assets/downArrow.gif";
import downArrowWhite from "@assets/downArrowWhite.gif";

import styles from "./Greetings.module.scss";
import { useEffect, useState } from "react";

const Greetings = ({}) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const arrow = isMobile ? downArrowWhite : downArrow;

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img className={styles.image} src={backGround} alt="picture" />
      </div>

      <div className={styles.averageContainer}>
        <p className={styles.averageContainer__title}>
          Vladislav <span>&</span> Elizaveta
        </p>
        <p className={styles.date}>Свадебный день</p>
        <a className={styles.downArrow} href="#dearGuest">
          <img src={arrow} alt="Down Arrow" />
        </a>
      </div>

      <div className={styles.rightContainer}>
        <img className={styles.image} src={backGround2} alt="picture" />
      </div>
    </div>
  );
};

export default Greetings;
