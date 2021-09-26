import { useState, useEffect, useRef, ChangeEvent } from "react";
import "../styles/app.css";
import PostService from "../API/PostService";
import { PostList } from "../components/PostList";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import { MyModal } from "../components/UI/Modal/MyModal";
import { MyButton } from "../components/UI/Button/MyButton";
import { usePostsSortAndSearch } from "../hooks/usePosts";
import { MyLoader } from "../components/UI/Loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { MyPagination } from "../components/UI/Pagination/MyPagination";
import { getPageCount } from "../utils/pages";
import { MySelect } from "../components/UI/Select/MySelect";

export type NewPostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type sortType = "title" | "body";

export const Posts = () => {
  const [posts, setPosts] = useState<Array<NewPostType>>([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modalVisibility, setModalVisibility] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const LastElemRef = useRef();

  //кастомный хук
  //кастомный хук, который получает посты, параметр сортировки и строку поиска
  //и возвращает отсортированный массив с учетом данных из строки поиска
  const searchAndSortedPosts = usePostsSortAndSearch({
    posts: posts,
    sort: filter.sort,
    query: filter.query
  });
  //кастомный хук

  //кастомный хук
  const useFetchingHandler = async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  };
  // получает колбэк функцию и возвращает 3 параметра:
  //1 параметр - результат работы функции, которую мы ему передали,
  //2 параметр - состояние загрузки типа булеан,
  //3 параметр - текст ошибки
  const [fetchPosts, isLoading, error] = useFetching({
    callback: useFetchingHandler
  });
  //кастомный хук

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

    //скрывает модальное окно при добавлении поста
    setModalVisibility(false);
  };

  //функция deletePost получает id поста из дочерней компоненты
  const deletePost = (deletedPostId: number) => {
    setPosts([...posts].filter((post) => post.id !== deletedPostId));
  };

  useObserver({
    elementRef: LastElemRef,
    isLoading: isLoading as boolean,
    canLoad: page < totalPages,
    setPageCallback: () => {
      setPage(page + 1);
    }
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  // const changePage = (page: number) => {
  //   setPage(page);
  // };

  return (
    <div className="App">
      <div style={{ marginTop: "30px" }}>
        <MyButton
          btnTitle={"Add New Post"}
          click={() => setModalVisibility(true)}
        />
      </div>

      <MyModal visible={modalVisibility} setVisible={setModalVisibility}>
        <PostForm newPostCallback={addNewPost} />
      </MyModal>

      <hr style={{ margin: "15px 0px" }} />

      <PostFilter postsFilter={filter} setPostsFilter={setFilter} />

      <PostList
        title={"Javascript Posts"}
        postsList={searchAndSortedPosts}
        deletePostCallback={deletePost}
      />
      <div
        ref={LastElemRef}
        style={{
          width: "100%",
          height: "0px",
          backgroundColor: "transparent"
        }}
      />

      {isLoading && <MyLoader />}

      {error ? <h3 style={{ textAlign: "center" }}>Error: {error}</h3> : ""}

      {/* <MyPagination
        totalPages={totalPages}
        changePage={changePage}
        page={page}
      /> */}
    </div>
  );
};
