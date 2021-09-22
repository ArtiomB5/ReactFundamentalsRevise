import { forwardRef } from "react";

import classes from "./MyInput.module.css";

type PropsType = {
  placeholder: string;
};

export const MyInputWithRef = forwardRef((props: PropsType, ref: any) => {
  return (
    <input
      type="text"
      className={classes.myInput}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
});
