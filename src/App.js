import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import NoMatch from "./components/NoMatch/NoMatch";
import { Header } from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="footer" element={<Footer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
