import { Link, NavLink } from "react-router-dom";

export function Header(props) {
  return (
    <div className="flex justify-between bg-purple-400 px-3 py-3">
      <div>Logo</div>
      <div>
        <ul className="flex">
          <li className="mr-2">
            <NavLink
              to={{
                pathname: "/",
                hash: "Aashu",
                search: "?channel=Aashu",
                state: {
                  dashbord: true,
                },
              }}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              to="about"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
