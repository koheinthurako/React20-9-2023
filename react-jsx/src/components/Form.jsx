import "./Form.css";
import { useRef } from "react";

// ဒီ Form Page က အောက်က Form ထဲမှာရှိတဲ့ data တွေကို Parent (App Level) ကိုပြန်ပေးရမှာမို့ Emitting ဆိုတဲ့သဘောတရားကိုသုံးပေးရတယ်

const Form = ({onSubmit}) => {

    console.log(onSubmit)
    const inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        onSubmit(inputRef.current.value);
        inputRef.current.value = null;
    };

  return (
    <form className="formContainer">
        <input ref={inputRef} type="text" placeholder="Write something..."/>
        <button onClick={handleClick}>Add</button>
    </form>
    
  )
}

export default Form;