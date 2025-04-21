import React, { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer: React.FC = () => {
  const targetDate = new Date("2025-08-09T00:00:00"); // можно заменить на свою дату
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / 1000 / 60) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={styles.timerWrapper}>
      <p className={styles.title}>до свадьбы осталось</p>
      <div className={styles.timer}>
        <div className={styles.timerItem}>
          <div className={styles.timeValue}>{timeLeft.days}</div>
          <div className={styles.timeLabel}>дней</div>
        </div>

        <div className={styles.separatorLine}></div>

        <div className={styles.timerItem}>
          <div className={styles.timeValue}>{timeLeft.hours}</div>
          <div className={styles.timeLabel}>часов</div>
        </div>

        <div className={styles.separatorLine}></div>

        <div className={styles.timerItem}>
          <div className={styles.timeValue}>{timeLeft.minutes}</div>
          <div className={styles.timeLabel}>минут</div>
        </div>

        <div className={styles.separatorLine}></div>

        <div className={styles.timerItem}>
          <div className={styles.timeValue}>{timeLeft.seconds}</div>
          <div className={styles.timeLabel}>секунд</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
