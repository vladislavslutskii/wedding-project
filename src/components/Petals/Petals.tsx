import { useEffect, useState } from "react";
import styles from "./Petals.module.scss";

// Внешняя картинка
const petalURL = "https://kolchvesti.ru/wp-content/uploads/2016/10/lep.png";

export default function Petals() {
  const [count, setCount] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      setCount(window.innerWidth < 768 ? 15 : 40); // Меняем количество лепестков в зависимости от ширины экрана
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.petals}>
      {[...Array(count)].map((_, i) => {
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        const swayX =
          (Math.random() < 0.5 ? -1 : 1) * (10 + Math.random() * 20);
        const scale = 0.6 + Math.random() * 0.6;
        const rotate = Math.random() * 360;

        return (
          <span
            key={i}
            className={styles.petalWrapper}
            style={{
              left: `${Math.random() * 100}%`, // Случайная позиция по оси X
              animationDelay: `${delay}s`, // Случайная задержка анимации
              animationDuration: `${duration}s`, // Случайная длительность анимации
            }}
          >
            <img
              src={petalURL}
              alt="petal"
              className={styles.petal}
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg)`,
                ["--sway-x" as any]: `${swayX}px`,
                animationDelay: `${delay}s`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
