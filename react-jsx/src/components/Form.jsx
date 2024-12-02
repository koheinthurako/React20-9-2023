import "./Form.css";
import { useRef } from "react";

// ဒီ Form Page က အောက်က Form ထဲမှာရှိတဲ့ data တွေကို Parent (App Level) ကိုပြန်ပေးရမှာမို့ Emitting ဆိုတဲ့သဘောတရားကိုသုံးပေးရတယ်
// Parent to Child Data ပေးချင်ရင် props နဲ့ပေးလို့ရပြီး Child to Parent Data ပေးချင်ရင် Emitting ဆိုတဲ့သဘောတရားကိုသုံး (props) နဲ့ပဲပြန်ပေးလို့ရ

const Form = ({onSubmit}) => {

    // onSubmit က ဒီနေရာမှာ Parent Level(App.jsx) မှာရှိတဲ့ Function ကြီးတစ်ခုလုံးကို Child Level ကိုပို့ပေးသွားတာပဲဖြစ်ပါတယ်
  
    console.log(onSubmit)
    const inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        // အဲ့ဒီ onSubmit (handleClick) function ထဲမှာ လက်ရှိ Form.jsx ထဲမှာ ဖမ်းထားသည့် inputRef တန်ဖိုးကို
        // Parent Level ဖြစ်တဲ့ App.jsx ကိုပြန်ပေးလိုက်တာဖြစ်ပါတယ် ဒါဆိုရင်တော့ Child ထဲမှာရှိတဲ့ တန်ဖိုးတစ်ခုက Parent Level က
        // Function ထဲကိုရောက်သွားပြီး Parent Level ထဲမှာပေါင်းရေးထားတဲ့ Code တွေနဲ့ တွဲဖက်အလုပ်လုပ်နိုင်သွားတာပဲဖြစ်ပါတယ်
        
        // Main Function တွေက Parent Level မှာရှိပြီး Child Level က တန်ဖိုးကို Parent ရဲ့ Function ထဲထည့်ပေးခြင်းဖြစ်ပါတယ်
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