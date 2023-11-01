import "./SignIn.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navbar } from "../../components/index";
import { Link } from "react-router-dom";

export default function SignIn() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="sign-in">
      <Navbar></Navbar>
      <div className="sign-in-text">
        <h1 data-aos="fade-up">Sign in</h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          mollitia?
        </p>
      </div>
      <div className="sign-in-body container">
        <div data-aos="fade-up" className="sign-in-input-container">
          <div className="diamond"></div>
          <input
            type="text"
            placeholder="Username ..."
            className="Input"
            required
          />
        </div>
        <div data-aos="fade-up" className="sign-in-input-container">
          <div className="diamond"></div>
          <input
            type="password"
            placeholder="Password ..."
            className="Input"
            required
          />
        </div>
        <div className="sign-in-btns" data-aos="fade-up">
          <button className="Button">Sign in</button>
          <Link to={"/"}>
            <button className="Button-outline">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
