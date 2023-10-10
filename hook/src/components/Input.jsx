import { useRef, useState } from "react";

const Input = () => {

// const inputRef = useRef();

// State ကိုသုံးပြီး input ထဲက value တွေကိုယူခြင်း
const [text, setText] = useState("");

const handleClick = () => {
    console.log(text);
}

const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
}

  return (
    <div>
        {/* <input ref={inputRef} type="text" /> */}

        {/* value props ကိုသုံးပြီဆိုရင် user input ကိုရဖို့အတွက် onChange ဆိုသည့် props ကိုသုံးပြီး အထဲမှာ function တစ်ခုရေးပေးရသည် */}
        <input value={text} onChange={handleChange} type="text"  />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Input;