import "./page.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  // useNavigate ဆိုတဲ့ react-router-dom မှ support feature ကိုအသုံးပြုပြီး button တစ်ခုခုကိုနှိပ်လိုက်တာနဲ့ ဘယ်သွားမလဲဆိုတာကို အောက်ကလိုပြန်သုံးနိုင်တယ်
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/service");
  }

  return (
    <div className="container home">
      <h1>Home</h1>
      <button onClick={handleClick}>Go to Service</button>
    </div>
  )
}

export default Home;