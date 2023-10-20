import "./page.css";
import { useNavigate, useParams } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  const toContact = () => {
    navigate(-1);
  }

  const {name} = useParams();

  // console.log(params);

  return (
    <div className="container contact">
      <div className="toBoxes">
        <h1>{name}</h1>
        <button onClick={toContact}>Click Here!</button>
      </div>
    </div>
  )
}

export default Contact;