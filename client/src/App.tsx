import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Register, SignIn, Tasks } from "./pages/index";

export const API = "http://localhost:3001";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}
