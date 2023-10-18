import "./page.css";
import { useRef } from "react";
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

  // useRef ကိုသုံးပြီး Route တစ်ခုထဲက data ကို တခြား Route တစ်ခုထဲပေးပို့ချင်ရင် useLocation Hook နဲ့တွဲသုံးပြီးပို့ပေးလို့ရသည်
  const inputRef = useRef();

  const handleClick = () => {
    navigate("/service", {state:{text:inputRef.current.value}})
  }

  return (
    <div className="container home">
      <div className="inputBox">
        <input ref={inputRef} type="text" placeholder=" Type Something and this data will sent to service tab"/>
        <button onClick={handleClick}>Click</button>
      </div>
      <div className="boxContainer">
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
    </div>
  )
}

export default Home;