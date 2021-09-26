import { MouseEvent } from "react";
import cls from "./MyModal.module.css";
import { PostFormType } from "../../PostForm";

type propsType = {
  children: PostFormType;
  visible: boolean;
  setVisible: (visibility: boolean) => void;
};

export const MyModal = ({ children, visible, setVisible }: propsType) => {
  let rootClases = [cls.myModal];

  if (visible) {
    rootClases.push(cls.active);
  }

  const onClickModalHandler = () => {
    setVisible(false);
  };

  const onClickContentHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={rootClases.join(" ")} onClick={onClickModalHandler}>
      <div className={cls.myModalContent} onClick={onClickContentHandler}>
        {children}
      </div>
    </div>
  );
};
