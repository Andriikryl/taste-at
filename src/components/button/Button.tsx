import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./style.module.css";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};
export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={clsx(styles.button)}>
      {children}
    </button>
  );
};
