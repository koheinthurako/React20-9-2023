import "./page.css";
import { useNavigate, useLocation } from "react-router-dom";

const Service = () => {

  const navigate = useNavigate();

  const toService = () => {
    navigate("/");
  }

  const location = useLocation();
  // console.log(location.state);

  return (
    <div className="container service">
      <div className="toBoxes">
        <h1>Back To Home</h1>
        <p>{location.state.text}</p>
        <button onClick={toService}>Click Here!</button>
      </div> 
    </div>
  )
}

export default Service;