import { Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar/Appbar";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import AddBlog from "./pages/Blog/AddBlog/AddBlog";
import EditBlog from "./pages/Blog/EditBlog/EditBlog";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit-blog" element={<EditBlog />} />
      </Routes>
    </>
  );
}

export default App;
