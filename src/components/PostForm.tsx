import { useState, ChangeEvent, MouseEvent } from "react";
import { MyInput } from "./UI/Input/MyInput";
import { MyButton } from "./UI/Button/MyButton";
import { NewPostType } from "../App";

type propsType = {
  newPostCallback: (param: NewPostType) => void;
};

export const PostForm = (props: propsType) => {
  const [postData, setPostData] = useState({ title: "", description: "" });

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: postData.title,
      body: postData.description
    };
    props.newPostCallback(newPost);
    setPostData({ title: "", description: "" });
  };

  return (
    <form>
      <MyInput
        placeholder={"Post Title"}
        value={postData.title}
        setValue={(event: ChangeEvent<HTMLInputElement>) =>
          setPostData({ ...postData, title: event.currentTarget.value })
        }
      />
      <MyInput
        placeholder={"Post Description"}
        value={postData.description}
        setValue={(event: ChangeEvent<HTMLInputElement>) =>
          setPostData({ ...postData, description: event.currentTarget.value })
        }
      />
      <MyButton
        btnTitle={"Add New Post"}
        click={(event: MouseEvent<HTMLButtonElement>) => clickHandler(event)}
      />
    </form>
  );
};
