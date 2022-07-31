import "./App.css";
import { useExtension } from "./Contexts/context";
import MainPage from "./Pages/MainPage/MainPage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  const { userName } = useExtension();
  return <div className="App">{userName ? <WelcomePage /> : <MainPage />}</div>;
}

export default App;
