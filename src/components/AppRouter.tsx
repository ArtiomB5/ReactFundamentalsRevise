import { useContext } from "react";
import { AuthorizedContext } from "../context/index";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";

export const AppRouter = () => {
  const { stateIsAuth, setStateIsAuth } = useContext(AuthorizedContext);

  //переменная хранит данные является пользователей авторизованным или нет
  //в зависимости от ее значению пользователю будут доступны определенные пути
  //если авторизован - privareRoutes
  //если не авторизован - publicRoutes
  let authorizedUser = stateIsAuth;

  return (
    <>
      {/* Switch позволяет группировать маршруты и выбрать
      хотя бы один, который есть внтури.
      Если хотя бы 1 маршрут внутри switch е отработал, то
      этот копонент позволит перевести пользователя 
      на другую страиницу используя компоненту Redirect.
      Пользователь будет переводится на страницу указанную
      в атрибуте to компоненты Redicrect*/}
      <Switch>
        {/* Route - компонент, позволяющий объявить 
      какой-то маршрут. */}
        {/* Внутрь Route помещается компонент, который 
      необходимо отрисовать */}
        {/* path - атрибут содержащий в себе путь, по которому 
      эта страница должна отрисовываться */}
        {/* <Route path="/about">
          <About />
        </Route> */}

        {/* атрибут exact добавлен, что бы HashRouter или BrowserRouter
        отслеживали точно совпадения адреса в строке браузера,
        а не просто присуствие в пути строки /posts */}
        {/* <Route exact path="/posts">
          <Posts />
        </Route> */}

        {/* что бы путь был динамическим нужно указать 
        пупуть + :index (index т.к. мы его используем в компоненте PostItem)
        для перехода на страницу поста */}
        {/* <Route exact path="/posts/:index">
          <PostPage />
        </Route> */}
        {authorizedUser
          ? privateRoutes.map((rout) => {
              return (
                <Route
                  exact={rout.exact}
                  path={rout.path}
                  component={rout.component}
                  key={rout.path}
                />
              );
            })
          : publicRoutes.map((rout) => {
              return (
                <Route
                  exact={rout.exact}
                  path={rout.path}
                  component={rout.component}
                  key={rout.path}
                />
              );
            })}

        {/* компонента Redicrect отображает компоненту, служащую стартовой страиницей */}
        <Redirect to="/login" />
      </Switch>
    </>
  );
};
