import { ChangeEvent } from "react";
import { MySelect } from "../components/UI/Select/MySelect";
import { MyInput } from "../components/UI/Input/MyInput";

type filterType = {
  filter: string;
  query: string;
};

type PropsType = {
  postsFilter: filterType;
  setPostsFilter: (param: filterType) => void;
};

export const PostFilter = (props: PropsType) => {
  const sortOptios = [
    { optionValue: "title", optionTitle: "Sort by title" },
    { optionValue: "body", optionTitle: "Sort by description" }
  ];

  //функция sortPosts получает тип сортировки из дочерней компоненты
  //и сортирует посты в зависимости от полученных от дочерней компоненты данных
  const sortPosts = (sortValue: string) => {
    props.setPostsFilter({ ...props.postsFilter, filter: sortValue });
  };

  //функция setSerchQuery получает данные из строки поиска дочерней компоненты
  //и помещает их в локальный стейт
  const setSerchQuery = (queryValue: string) => {
    props.setPostsFilter({ ...props.postsFilter, query: queryValue });
  };

  return (
    <>
      <MySelect
        optionDefValue={"Sort by:"}
        options={sortOptios}
        sortSelectionCallback={sortPosts}
      />

      <MyInput
        placeholder={"Enter your search term"}
        value={props.postsFilter.query}
        setValue={(event: ChangeEvent<HTMLInputElement>) =>
          setSerchQuery(event.currentTarget.value)
        }
      />
    </>
  );
};
