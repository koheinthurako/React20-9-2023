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
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/service'}>Service</Link>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav;