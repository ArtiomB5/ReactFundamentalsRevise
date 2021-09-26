import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/UI/Navbar/MyNavbar";
import { AppRouter } from "./components/AppRouter";
import { AuthorizedContext } from "./context/index";
import "./styles/app.css";
import { useEffect, useState } from "react";

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const AuthorizedContextValue = {
    stateIsAuth: isAuthorized,
    setStateIsAuth: setIsAuthorized
  };

  //т.к. массив зависимостей пустой то useEffect сработает 1 раз
  //получит данный из localStorage и если они будут раны строке 'true'
  //тогода установит значение локальному стейту - true
  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      setIsAuthorized(true);
    }
  }, []);
  return (
    <AuthorizedContext.Provider value={AuthorizedContextValue}>
      {/* HashRouter - отслеживает изменение путей и //перерисовывает компоненты. */}
      <HashRouter>
        <Navbar />
        <AppRouter />
      </HashRouter>
    </AuthorizedContext.Provider>
  );
}
