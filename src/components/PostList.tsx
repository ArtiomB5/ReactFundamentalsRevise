import { PostItem } from "../components/PostItem";
import { ObjType } from "../components/PostItem";

type PropsType = {
  title: string;
  postsList: Array<ObjType>;
  deletePostCallback: (id: number) => void;
};

export const PostList = (props: PropsType) => {
  if (props.postsList.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Posts not found!</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{props.title}</h2>
      {props.postsList.map((post, postIndex) => {
        return (
          <PostItem
            post={post}
            index={postIndex}
            deletePostCallback={props.deletePostCallback}
            key={postIndex}
          />
        );
      })}
    </div>
  );
};
