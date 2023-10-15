import "./page.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  // useNavigate ဆိုတဲ့ react-router-dom မှ support feature ကိုအသုံးပြုပြီး button တစ်ခုခုကိုနှိပ်လိုက်တာနဲ့ ဘယ်သွားမလဲဆိုတာကို အောက်ကလိုပြန်သုံးနိုင်တယ်
  const navigate = useNavigate();

  const toService = () => {
    navigate("/service");
  }

  const toAbout = () => {
    navigate("/about");
  }

  const toContact = () => {
    navigate("/contact");
  }

  return (
    <div className="container home">
      <div className="toBoxes">
        <h1>TO ABOUT</h1>
        <button onClick={toAbout}>Click Here!</button>
      </div>
      <div className="toBoxes">
        <h1>TO SERVICE</h1>
        <button onClick={toService}>Click Here!</button>
      </div>
      <div className="toBoxes">
        <h1>TO CONTACT</h1>
        <button onClick={toContact}>Click Here!</button>
      </div>
    </div>
  )
}

export default Home;