import { useState } from "react";
import "./One.css";

const ComponentsOne = () => {

    const [toogle, setToogle] = useState(true);

    const handleClick = () => {
        // pre သည် ဒီနေရာမှာ toogle နေရာကိုကိုယ်စားပြုပြီး useState(ထဲကတန်ဖိုး) ကို သွားယူသည့်အတွက် return နေရာတွင် !pre ကိုပြန်ပြီး toogle ဖြစ်နေသည်
        setToogle((pre) => !pre);
    }
    
  return (
    <div>
        {/* အောက်က ဟာက Conditional Styling ဖြစ်တယ် className ထဲမှာ condition စစ်ပြီးတော့ မှန်တဲ့ class ကို ထည့်ခြင်း */}
        <h1 className={toogle ? 'introText' : 'changeTextColor'}>Hello World</h1>
        <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default ComponentsOne;