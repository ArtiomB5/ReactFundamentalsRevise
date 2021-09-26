import { MouseEvent } from "react";
import classes from "./MyButton.module.css";

type PropsType = {
  btnTitle: string;
  click?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const MyButton = (props: PropsType) => {
  return (
    <button
      disabled={props.disabled}
      className={classes.myBtn}
      onClick={props.click}
    >
      {props.btnTitle}
    </button>
  );
};
