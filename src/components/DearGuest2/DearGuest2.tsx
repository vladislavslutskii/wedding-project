import React from "react";
import styles from "./DearGuest2.module.scss";

interface WeddingInviteProps {
  day: number;
  month: string;
  year: number;
  time: string;
  id?: string; // Делаем необязательным, если нужно
}

const monthMap: Record<string, number> = {
  январь: 0,
  февраль: 1,
  март: 2,
  апрель: 3,
  май: 4,
  июнь: 5,
  июль: 6,
  августа: 7,
  сентябрь: 8,
  октябрь: 9,
  ноябрь: 10,
  декабрь: 11,
};

export default function DearGuest2({
  id,
  day,
  month,
  year,
  time,
}: WeddingInviteProps) {
  const monthIndex = monthMap[month.toLowerCase()];
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();
  const startDay = (firstDayOfWeek + 6) % 7; // Преобразуем к формату ПН=0, ВТ=1,..., ВС=6

  return (
    <div id={id} className={styles.invite}>
      <p className={styles.header}>Дорогие гости</p>
      <p className={styles.text}>
        Скоро наступит очень важный для нас день — мы станем семьей! Мы верим,
        что этот день послужит началом нашей счастливой семейной жизни. Поэтому
        не представляем наш праздник без Вашего участия.
      </p>

      <p className={styles.text}>Мы с нетерпением ждём вас</p>
      <p className={styles.date}>
        {day} {month} {year}
      </p>

      <div className={styles.calendar}>
        <div className={styles.weekdays}>
          {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
        <div className={styles.days}>
          {/* Пустые дни в начале месяца */}
          {Array.from({ length: startDay }).map((_, i) => (
            <span key={`empty-${i}`} className={styles.emptyDay} />
          ))}

          {/* Дни месяца */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const currentDay = i + 1;
            const isWeddingDay = currentDay === day;

            return (
              <span
                key={currentDay}
                className={`${styles.day} ${isWeddingDay ? styles.activeDay : ""}`}
              >
                {isWeddingDay ? (
                  <>
                    <svg
                      className={styles.heart}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11 5 12 6C13 5 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z" />
                    </svg>
                    <span className={styles.dayNumber}>{currentDay}</span>
                  </>
                ) : (
                  currentDay
                )}
              </span>
            );
          })}
        </div>
      </div>

      <p className={styles.time}>в {time}</p>
      <div className={styles.halfBorder}></div>
    </div>
  );
}
