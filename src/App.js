import "./App.css";
import MyPage from "./components/Content/MyPage/MyPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="Content">
        <MyPage />
      </div>
    </div>
  );
}

export default App;
