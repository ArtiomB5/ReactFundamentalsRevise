import { useMemo } from "react";
import { NewPostType, sortType } from "../pages/Posts";

type usePostsSortPropsType = {
  posts: Array<NewPostType>;
  sort: string;
};

type queryPropsType = {
  query: string;
};

export const usePostsSort = (props: usePostsSortPropsType) => {
  const sortPosts = useMemo(() => {
    if (props.sort) {
      return [...props.posts].sort((p1, p2) =>
        p1[props.sort as sortType].localeCompare(p2[props.sort as sortType])
      );
    } else {
      return props.posts;
    }
  }, [props.sort, props.posts]);
  return sortPosts;
};

export const usePostsSortAndSearch = (
  props: usePostsSortPropsType & queryPropsType
) => {
  const sortPosts = usePostsSort({ posts: props.posts, sort: props.sort });

  const searchAndSortedPosts = useMemo(() => {
    return sortPosts.filter((post) =>
      post.title.toLowerCase().includes(props.query.toLowerCase())
    );
  }, [props.query, sortPosts]);

  return searchAndSortedPosts;
};
