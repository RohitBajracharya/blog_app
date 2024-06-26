import { Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar/Appbar";
import { BlogProvider } from "./context/BlogContext";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import AddBlog from "./pages/Blog/AddBlog/AddBlog";
import EditBlog from "./pages/Blog/EditBlog/EditBlog";
import MyBlog from "./pages/Blog/MyBlog/MyBlog";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BlogProvider>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit-blog" element={<EditBlog />} />
          <Route path="/my-blogs" element={<MyBlog />} />
        </Routes>
      </BlogProvider>
    </>
  );
}

export default App;
