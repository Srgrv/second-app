import "./App.css";
import MyPage from "./components/Content/MyPage/MyPage";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path="/myPage" element={<MyPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
