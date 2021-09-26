import { useHistory } from "react-router-dom";
import { MyButton } from "./UI/Button/MyButton";

export type ObjType = {
  id: number;
  title: string;
  body: string;
};

type PropsType = {
  post: ObjType;
  index: number;
  deletePostCallback: (id: number) => void;
};

export const PostItem = (props: PropsType) => {
  //хук useHistory возвращает объект, у которого есть функция push,
  //которая позволяет переходить на любую другую страницу без ссылок
  const router = useHistory();

  return (
    <div className="post" key={props.post.id}>
      <div className="post__content">
        <h3>
          {props.index}. {props.post.title}
        </h3>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          btnTitle={"Comments"}
          click={() => {
            router.push(`/posts/${props.index}`);
          }}
        />
        <MyButton
          btnTitle={"Delete"}
          click={() => props.deletePostCallback(props.post.id)}
        />
      </div>
    </div>
  );
};
