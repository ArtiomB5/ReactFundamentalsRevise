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
  console.log(props);
  return (
    <div className="post" key={props.post.id}>
      <div className="post__content">
        <h3>
          {props.index + 1}. {props.post.title}
        </h3>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          btnTitle={"Delete"}
          click={() => props.deletePostCallback(props.post.id)}
        />
      </div>
    </div>
  );
};
