import "./page.css";
import { useNavigate } from "react-router-dom";

const Service = () => {

  const navigate = useNavigate();

  const toService = () => {
    navigate("/");
  }

  return (
    <div className="container service">
      <div className="toBoxes">
        <h1>Back To Home</h1>
        <button onClick={toService}>Click Here!</button>
      </div> 
    </div>
  )
}

export default Service;