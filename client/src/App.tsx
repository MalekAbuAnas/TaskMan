import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/index";

export const API = "http://localhost:3001";

export default function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
