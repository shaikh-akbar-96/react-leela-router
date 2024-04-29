import { Link, Outlet } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Header />
          </li>

          <li>
            <Outlet />
          </li>
          <li>
            <Footer />
          </li>
        </ul>
      </nav>
    </div>
  );
}
