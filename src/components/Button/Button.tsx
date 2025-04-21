import { FC, ReactElement } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  title: string | ReactElement;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({ title, disabled, className, onClick }) => {
  return (
    <div onClick={!disabled ? onClick : undefined} className={styles.button}>
      {title}
    </div>
  );
};

export default Button;
