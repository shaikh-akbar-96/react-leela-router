import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import NoMatch from "./components/NoMatch/NoMatch";
import { Header } from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Posts from "./components/Posts/Posts";
import PostList from "./components/PostList/PostList";
import SinglePostList from "./components/SinglePostList/SinglePostList";

function App() {
  const isLoggedIn = true;
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="footer" element={<Footer />} />
          <Route
            path="contact"
            element={isLoggedIn ? <Navigate to="/" /> : <Contact />}
          />
          <Route path="posts/:id" element={<Posts />} />
          <Route path="list/" element={<PostList />} />
          <Route path="list/:id" element={<SinglePostList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
