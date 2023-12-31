import "./Nav.css";
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <div className="NavContainer">
        <ul>
            <li>
                {/* Link သည် react-router-dom မှ support ပေးထားသော <a></a> လိုမျိုး ဖြစ်ပေမယ့် document refresh မဖြစ်ပါ
                    Link ကိုသုံးတဲ့အခါမှာ rendering လုပ်ပြီးသည့်အချိန်တွင် elements ထဲတွင် <a></a> tag လိုမျိုး render လုပ်သွားတယ်
                    ရေးတဲ့အခါမှာလည်း Link သည် <a></a> tag သဘောမျိုးဖြစ်သည့်အတွက် Route ထဲက path တွေကိုသုံးပြီး Link ခုန်ထားတဲ့အတွက်
                    <Router></Router> ထဲမှာပဲ မူလ <Nav/> ကိုထည့်ရေးရတယ် အပြင်ထုတ်ရေးလို့မရပါ
                */}
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/service'}>Service</NavLink>
            </li>
            <li>
                {/* NavLink သည် တစ်ခုခုကို နှိပ်လိုက်တာနဲ့ active class ကို default အနေနဲ့ auto ထည့်ပေးပြီး active ဖြစ်ရင် ဘာလုပ်မယ် မလုပ်ဘူးဆိုတာကို လုပ်နိုင်သည် */}
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/nest'}>Nest</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav;