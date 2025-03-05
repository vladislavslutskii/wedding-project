import classNames from "classnames";
import { FC, ReactElement } from "react";
import styles from "./Button.module.scss";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
  Error = "error",
}

type ButtonProps = {
  type: ButtonTypes;
  title: string | ReactElement;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  type,
  title,
  disabled,
  className,
  onClick,
}) => {
  const buttonStyle = styles[type];

  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={classNames(buttonStyle, className, {
        [styles.disabled]: disabled,
      })}
    >
      {title}
    </div>
  );
};

export default Button;
