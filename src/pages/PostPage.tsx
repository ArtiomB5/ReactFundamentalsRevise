import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { MyLoader } from "../components/UI/Loader/MyLoader";
import { useFetching } from "../hooks/useFetching";

export const PostPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  //хук useParams позволяет из адресной строки получить
  //строку идущую, в нашем случае после posts/
  //в нашем случае это будет id поста, т.к. эту часть адреса мы
  //формируем в компоненте PostItem с помощью
  //функции push хука useHistory пакета react-router-dom
  const postId: { index: string } = useParams();

  const useFetchingPostHandler = async () => {
    const response = await PostService.getPostById(postId.index);
    setPost(response.data);
  };

  const [fetchPost, isPostLoading, postError] = useFetching({
    callback: useFetchingPostHandler
  });

  const useFetchingCommentsHandler = async () => {
    const response = await PostService.getPostCommentsById(postId.index);
    setComments(response.data);
  };

  const [fetchComments, isCommentsLoading, commentsError] = useFetching({
    callback: useFetchingCommentsHandler
  });

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  const commentsMap = comments.map((comment: any) => {
    return (
      <>
        {isCommentsLoading ? (
          <MyLoader />
        ) : (
          <div style={{ border: "1px solid red", marginTop: "10px" }}>
            <h4>{comment.name}</h4>
            <div>{comment.body}</div>
          </div>
        )}
      </>
    );
  });

  return (
    <div>
      <h2>{`You opened the post page with ID ${postId.index}`}</h2>
      {isPostLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id} {post.title}
          {commentsMap}
        </div>
      )}
    </div>
  );
};
