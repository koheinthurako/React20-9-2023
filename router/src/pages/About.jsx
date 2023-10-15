import "./page.css";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  }

  return (
    <div className="container about">
      <div className="toBoxes">
        <h1>Back To Home</h1>
        <button onClick={toHome}>Click Here!</button>
      </div>
    </div>
  )
}

export default About;