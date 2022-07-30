import "./App.css";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  // const fetchingData = async () => {
  //   console.log("first");
  //   try {
  //     const response = await axios.get(
  //       "https://api.unsplash.com/search/photos?page=1&query=nature&client_id=YKV8cJaG0G-U5QPFPAoUC7KXT7eAwUXenVylMmUAkxs"
  //     );
  //     console.log(response.data.results[0].urls.small);
  //     // console.log(response.data.results);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url("https://source.unsplash.com/1920x1080/?wallpaper")`,
      // }}
    >
      <WelcomePage />
    </div>
  );
}

export default App;
