import "./Register.css";
import { Navbar } from "../../components/index";
import Axios from "axios";
import { API } from "../../App";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    Axios.post(`${API}/register`, { username, password })
      .then((res) => {
        console.log(res.data);
        setMessage(`the User ${username} has been created successfully`);
        setTimeout(() => setMessage(""), 4000);
      })
      .catch((err) => console.log(err));
    setMessage(`Unsuccessful`);
  };

  return (
    <div className="register">
      <Navbar></Navbar>
      <div className="register-text">
        <h1>Register</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          mollitia?
        </p>
      </div>
      <div className="register-body container">
        <div className="input-container">
          <div className="diamond"></div>
          <input
            type="text"
            placeholder="Username ..."
            className="Input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div className="diamond"></div>
          <input
            type="password"
            placeholder="Password ..."
            className="Input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-btns">
          <button className="Button" onClick={handleRegister}>
            Register
          </button>
          <button className="Button-outline">Cancel</button>
        </div>
        <h1 className="register-message">{message}</h1>
      </div>
    </div>
  );
}
