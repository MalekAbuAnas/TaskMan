//import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  //const menus = ["Home", "About", "Projects", "Skills", "Contact us"];

  return (
    <div className="navbar navbar-expand-md bg-none navbar-dark text-white">
      <div className="container">
        <a href="#" className="navbar-brand">
          Task Man
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link underline" style={{ cursor: "pointer" }}>
                Theme
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link underline" style={{ cursor: "pointer" }}>
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link underline" style={{ cursor: "pointer" }}>
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/**{menus.map((menu) => (
              <li className="nav-item" key={menu}>
                <a className="nav-link text-white underline">
                  <Link
                    to={`/${
                      menu === "Home"
                        ? ""
                        : menu === "Contact us"
                        ? "contact"
                        : menu
                    }`}
                    className="nav-link"
                  >
                    {menu}
                  </Link>
                </a>
              </li>
            ))} */
