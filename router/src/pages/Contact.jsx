import "./page.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  const toContact = () => {
    navigate("/");
  }

  return (
    <div className="container contact">
      <div className="toBoxes">
        <h1>Back To Home</h1>
        <button onClick={toContact}>Click Here!</button>
      </div>
    </div>
  )
}

export default Contact;