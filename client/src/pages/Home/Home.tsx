import "./Home.css";
import { Navbar, Footer } from "../../components/index";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="home-text">
        <h1 data-aos="fade-up">Task Man</h1>
        <p data-aos="fade-up">Efficiency at Your Fingertips</p>
        <div className="home-btns" data-aos="fade-up">
          <Link to={"signin"}>
            <button className="Button">Get Started</button>
          </Link>
          <Link to={"/register"}>
            <button className="Button-outline">Register</button>
          </Link>
        </div>
        <div className="big-diamond home-diamond"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
