import "./SignIn.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../App";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const login = () => {
    axios
      .post(`${API}/login`, { username, password })
      .then(() => {
        if (username && password) {
          navigate("/tasks", { state: { username } });
        } else {
          console.log("Username or password doesn't exist");
        }
      })
      .catch((err) => console.log(err));
  };

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
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div data-aos="fade-up" className="sign-in-input-container">
          <div className="diamond"></div>
          <input
            type="password"
            placeholder="Password ..."
            className="Input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="sign-in-btns" data-aos="fade-up">
          <button className="Button" onClick={login}>
            Sign in
          </button>
          <Link to={"/"}>
            <button className="Button-outline">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
