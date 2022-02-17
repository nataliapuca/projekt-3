import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UserDetails } from "./components/UserDetails";
import { PostDetails } from "./components/PostDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/PostDetails" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
