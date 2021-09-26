import { Link } from "react-router-dom";
import Classes from "./MyNavbar.module.css";
import { MyButton } from "../Button/MyButton";
import { useContext } from "react";
import { AuthorizedContext } from "../../../context";

export const Navbar = () => {
  const { stateIsAuth, setStateIsAuth } = useContext(AuthorizedContext);

  const logouthandler = () => {
    setStateIsAuth(false);
    localStorage.removeItem("auth");
  };

  const LoginRender = () => {
    if (!stateIsAuth) {
      return (
        <Link to={"/login"}>
          <MyButton btnTitle={"Login"} />
        </Link>
      );
    } else {
      return <MyButton btnTitle={"Logout"} click={logouthandler} />;
    }
  };

  return (
    <>
      <div className={Classes.navbar}>
        <div className={Classes.navabr__link}>
          <Link to={"/about"}>
            <MyButton btnTitle={"About"} />
          </Link>
          <Link to={"/posts"}>
            <MyButton btnTitle={"Posts"} />
          </Link>
          <LoginRender />

          {/* использование тега a и атрибутом href привод
          к перезагрузке страницы при переходе по адресу,
          указанному в атрибуте href.
          Это нарушает принципт одностроничного приложения.
          Что бы этого не происходило нужно использовать
          компоненту Link с атрибутом to из пакета react-router-dom */}
          {/* <a href="#/posts">Posts</a> */}
        </div>
      </div>
    </>
  );
};
