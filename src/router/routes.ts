import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";
import { PostPage } from "../pages/PostPage";
import { ErrorPage } from "../pages/ErrorPage";

//массив с путями, доступными авторизованным пользователям
export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:index", component: PostPage, exact: true },
  { path: "/error", component: ErrorPage, exact: true }
];

//массив с путями, доступными неавторизованным пользователям
export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
