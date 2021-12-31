import React, { useState } from "react";
import "./App.css";
import Login from './components/login/Login';
import MainPage from "./components/main page/MainPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const onLogout = () => {
    setIsLogged(false);
    // render login page
  }

  const onLogin = () => {
    setIsLogged(true);
    // render main page
  }

  return (
    <>
      {isLogged ? <MainPage onLogout={onLogout} /> : <Login onLogin={onLogin} />}
    </>
  );
}

export default App;
