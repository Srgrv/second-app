import "./App.css";
import MyPage from "./components/Content/MyPage/MyPage";
import MyFriends from "./components/Content/MyFriends/MyFriends";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Test from "./components/test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="myPage/" element={<MyPage />} />
        <Route path="myPage/:id" element={<MyPage />} />
        <Route path="myFriends/" element={<MyFriends />} />
        <Route path="test/:id" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
