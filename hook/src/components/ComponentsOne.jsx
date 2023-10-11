import { useState } from "react";
import ComTwo from "./ComTwo";
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

        {/* အောက်က Conditional Rendering ဖြစ်တယ် သဘောက ပြချင်တဲ့အချိန်မှပြစေပြီး မလိုရင် ဖွက်ထားတဲ့သဘောဖြစ်တယ် {} ထဲမှာရေးရတယ် */}
        {
            toogle ? <ComTwo/> : null
        }
        <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default ComponentsOne;