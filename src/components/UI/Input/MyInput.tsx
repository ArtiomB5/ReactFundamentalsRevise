import { ChangeEvent } from "react";

import classes from "./MyInput.module.css";

type PropsType = {
  placeholder: string;
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const MyInput = (props: PropsType) => {
  return (
    <input
      type="text"
      className={classes.myInput}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.setValue}
    />
  );
};
