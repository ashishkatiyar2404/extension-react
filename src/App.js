import "./App.css";
import { useExtension } from "./Contexts/context";
import MainPage from "./Pages/MainPage/MainPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  const { userName } = useExtension();
  console.log(userName);
  return <div className="App">{userName ? <MainPage /> : <WelcomePage />}</div>;
}

export default App;
