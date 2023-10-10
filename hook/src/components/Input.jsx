import { useRef, useState } from "react";
import Counter from "./Counter";

// useRef and useState ကွာခြားချက်

// useRef က user input တစ်ခုကိုယူတယ်ဆိုရင် current box ထဲကနေပဲ DOM element တွေကိုခိုင်းစေသည့်အတွက် components တွေကို ထပ်ခါ rerendering လုပ်စရာမလိုပါ

// useState ကတော့ user input တစ်ခုကိုယူတယ်ဆိုရင် components ကို ပြန် rendering လုပ်သည့်အပြင် component အတွင်း ချိတ်ဆက်ထားသည့် တခြား components တွေကိုပါ
// redering လုပ်သွားသည့် အတွက် optimization အပိုင်းတွေ user input data လေးတစ်ခုအတွက် မလိုတဲ့ အပိုင်းတွေကိုပါ rendering လုပ်စေလို့ မကောင်းပါ
// အဲ့ဒါကိုဖြေရှင်းဖို့ memo ဆိုတဲ့ react method လေးကို အသုံးပြုလို့ရတယ် export default နေရာမှာ memo(Counter) သုံးလိုက်တာနဲ့ useState သုံးထားတဲ့
// parent level က rendering တစ်ခုလုပ်တိုင်း ချိတ်ဆက်ထားတဲ့ Counter components နဲ့ မသက်ဆိုင်သ၍ rendering မလုပ်တော့ပါ
// သက်ဆိုင်လာပါက ပုံမှန်အတိုင်း အလုပ်လုပ်သွားတယ်

const Input = () => {

// Ref ကိုသုံးပြီး input ထဲက value တွေကိုယူခြင်း
// const inputRef = useRef();

// State ကိုသုံးပြီး input ထဲက value တွေကိုယူခြင်း
const [text, setText] = useState("");

const handleClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.value = "";

    console.log(text);
    setText("");
}

const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
}

console.log("I am rendering");

  return (
    <div>
        {/* <input ref={inputRef} type="text" /> */}

        {/* value props ကိုသုံးပြီဆိုရင် user input ကိုရဖို့အတွက် onChange ဆိုသည့် props ကိုသုံးပြီး အထဲမှာ function တစ်ခုရေးပေးရသည် */}
        <input value={text} onChange={handleChange} type="text"  />
        <button onClick={handleClick}>Click</button>
        <Counter/> 
        {/* <Counter data={text}/> */}
    </div>
  )
}

export default Input;