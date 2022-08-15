import { useEffect } from "react";
import "./App.css";
import { useExtension } from "./Contexts/context";
import MainPage from "./Pages/MainPage/MainPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  const { userName, setUserName, setMainFocus } = useExtension();

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    setMainFocus(localStorage.getItem("focusToken"));
    document.title = "Extension";
    // eslint-disable-next-line
  }, []);
  return <div className="App">{userName ? <MainPage /> : <WelcomePage />}</div>;
}

export default App;
