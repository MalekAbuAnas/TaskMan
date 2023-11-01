import "./Register.css";
import { Navbar } from "../../components/index";
import Axios from "axios";
import { API } from "../../App";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleRegister = () => {
    Axios.post(`${API}/register`, { username, password })
      .then((res) => {
        console.log(res.data);
        setSendMessage(`the User ${username} has been created successfully`);
        setTimeout(() => setSendMessage(""), 4000);
      })
      .catch((err) => console.log(err));
    setSendMessage(`Unsuccessful`);
  };

  const emptyUsername = () => {
    setSendMessage("Username should include at least 1 character");
    setTimeout(() => setSendMessage(""), 4000);
  };
  const emptyPassword = () => {
    setSendMessage("Password should include at least 1 character");
    setTimeout(() => setSendMessage(""), 4000);
  };

  return (
    <div className="register">
      <Navbar></Navbar>
      <div className="register-text">
        <h1 data-aos="fade-up">Register</h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          mollitia?
        </p>
      </div>
      <div className="register-body container">
        <div data-aos="fade-up" className="input-container">
          <div className="diamond"></div>
          <input
            type="text"
            placeholder="Username ..."
            className="Input"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div data-aos="fade-up" className="input-container">
          <div className="diamond"></div>
          <input
            type="password"
            placeholder="Password ..."
            className="Input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-btns" data-aos="fade-up">
          <button
            className="Button"
            onClick={
              username == ""
                ? emptyUsername
                : password == ""
                ? emptyPassword
                : handleRegister
            }
          >
            Register
          </button>
          <Link to={"/"}>
            <button className="Button-outline">Cancel</button>
          </Link>
        </div>
        <h1 className="register-message">{sendMessage}</h1>
      </div>
    </div>
  );
}
