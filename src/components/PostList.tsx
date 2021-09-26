import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PostItem } from "../components/PostItem";
import { ObjType } from "../components/PostItem";
import "../styles/app.css";

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
      <TransitionGroup>
        {props.postsList.map((post, postIndex) => {
          return (
            <CSSTransition key={postIndex} timeout={500} classNames="post">
              <PostItem
                post={post}
                index={post.id}
                deletePostCallback={props.deletePostCallback}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
