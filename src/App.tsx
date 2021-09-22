import { useState, useMemo } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import "./styles/app.css";

export type NewPostType = {
  id: number;
  title: string;
  body: string;
};
export type sortType = "title" | "body";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "Javascript is programming language. Post 1"
    },
    {
      id: 2,
      title: "Javascript",
      body: "Javascript is programming language. Post 2"
    },
    {
      id: 3,
      title: "Javascript",
      body: "Javascript is programming language. Post 3"
    }
  ]);

  const [filter, setFilter] = useState({ filter: "", query: "" });

  const searchPosts = useMemo(() => {
    if (filter.query) {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(filter.query.toLowerCase())
      );
    } else if (filter.filter) {
      return [...posts].sort((p1, p2) =>
        p1[filter.filter as sortType].localeCompare(
          p2[filter.filter as sortType]
        )
      );
    } else {
      return posts;
    }
  }, [filter, posts]);

  // const sortedPosts = getSortedPosts();

  // const [postTitle, setPostTitle] = useState("");
  // const [postDescription, setpostDescription] = useState("");

  // //использование useRef для ппередачи ссылки в компоненту
  // const inputRef = useRef();
  // const InputWithRefLog = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   //preventDefault - отменяет действие браузера по умолчанию.
  //   //по умолчанию по нажатию кнопки, расположенной в форме перезагрузится страница
  //   console.log(inputRef.current.value);
  // };
  // //использование useRef для ппередачи ссылки в компоненту

  //функция addNewPost получает новый пост из дочерней компоненты
  const addNewPost = (newPost: NewPostType) => {
    setPosts([...posts, newPost]);
  };

  //функция deletePost получает id поста из дочерней компоненты
  const deletePost = (deletedPostId: number) => {
    setPosts([...posts].filter((post) => post.id !== deletedPostId));
  };

  return (
    <div className="App">
      <PostForm newPostCallback={addNewPost} />

      <hr style={{ margin: "15px 0px" }} />

      <PostFilter postsFilter={filter} setPostsFilter={setFilter} />

      <PostList
        title={"Javascript Posts"}
        postsList={searchPosts}
        deletePostCallback={deletePost}
      />
    </div>
  );
}
