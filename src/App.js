import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Layout = lazy(() => import("./components/Layout/Layout.js"));
const Home = lazy(() => import("./components/Home/Home.js"));
const About = lazy(() => import("./components/About/About.js"));
const Footer = lazy(() => import("./components/Footer/Footer.js"));
const Contact = lazy(() => import("./components/Contact/Contact.js"));
const Posts = lazy(() => import("./components/Posts/Posts.js"));
const PostList = lazy(() => import("./components/PostList/PostList.js"));
const SinglePostList = lazy(() =>
  import("./components/SinglePostList/SinglePostList.js")
);
const NoMatch = lazy(() => import("./components/NoMatch/NoMatch.js"));

function App() {
  const isLoggedIn = true;
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
