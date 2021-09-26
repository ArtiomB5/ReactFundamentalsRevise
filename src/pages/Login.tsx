import { MyInput } from "../components/UI/Input/MyInput";
import { MyButton } from "../components/UI/Button/MyButton";
import { useContext, FormEvent } from "react";
import { AuthorizedContext } from "../context";

export const Login = () => {
  const { stateIsAuth, setStateIsAuth } = useContext(AuthorizedContext);

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStateIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={onSubmitHandler}>
        <MyInput
          placeholder={"Login"}
          value={""}
          setValue={() => {}}
          type={"text"}
        />
        <MyInput
          placeholder={"Password"}
          value={""}
          setValue={() => {}}
          type={"password"}
        />
        <MyButton btnTitle="Log In" />
      </form>
    </div>
  );
};
