import "./Hookstart.css";
import { useRef, useState } from "react";

// Hook အကြောင်းစမယ် Hook တွေရဲ့ထိပ်ဆုံးမှာ use ဆိုတဲ့ စာလုံးကိုသုံးလေ့ရှိတယ်
// အောက်မှာ form တစ်ခုရှိတယ် သူ့နဲ့ဆိုင်တဲ့ action တွေလုပ်တော့မယ်ဆိုရင် useRef hook ကနေစမယ်
// useref ကို react library က provide ပေးထားပါတယ် သူ့ကိုယူသုံးဖို့ဆိုရင် react ကနေ object destruction ကိုသုံးပြီး useref ကို import လုပ်
// useref က ref container တစ်ခုပဲ သူ့အထဲမှာ .current ဆိုတဲ့ object တစ်ခုပါတယ် သူ့ထဲမှာပါတဲ့ function တွေကိုယူသုံးလို့ရပါတယ်
// ref ဆိုတာကတော့ သူ့ရဲ့ current ဆိုတဲ့ box ထဲမှာ ကိုယ်လုပ်ချင်တာကိုပေးသိမ်းလိုက်ပြီး document.getElementById() တို့လို DOM ကိုလည်း access လုပ်နိုင်ပါတယ်
// ref ကိုစမသုံးခင် initialize လုပ်ရမယ်

const Hookstart = () => {

    const textWhite = "textWhite";

    // useRef တို့ကိုလည်း hook လို့ခေါ်တယ်
    const inputRef = useRef();

    // hook တွေကိုသုံးချင်ရင် ref ဆိုတဲ့ prop လေးကိုသုံးပြီး input element မှာလိုရေးပေးရတယ်
    // input ထဲမှာ ref တစ်ခုကို inputRef ဆိုတဲ့နာမည်နဲ့ attach လုပ်လိုက်တော့ ref ထဲမှာရှိတဲ့ .current ဆိုတဲ့ Object ထဲက DOM Access တွေကိုသုံးလို့ရသွားပါတယ်

    const handleClick = (e) => {
        e.preventDefault();
        // focus ကတော့ input ကိုနှိပ်လိုက်တာနဲ့ နှိပ်လိုက်တဲ့ အကွက်ကို focus သွားလုပ်သွားမှာဖြစ်ပါတယ်
        // ပြန်ရှင်းရရင် inputRef ဆိုတာကတော့ ကိုယ်တစ်ခုခုလုပ်စေချင်တဲ့ element တစ်ခုကို လှမ်းဖမ်းလိုက်တဲ့ နာမည်ပေးလိုက်သည့် useRef hook တစ်ခုဖြစ်ပြီး
        // သူ့ကို button တစ်ခု၏ function တစ်ခုကနေ inputRef variable ကိုပြန်သုံးကာ inputRef.current ထဲက DOM Access Control လုပ်နိုင်တာပါ
        inputRef.current.focus();
        inputRef.current.style.borderColor = "red";
        console.log(inputRef.current.value);
        // အပေါ်က console.log() ကတော့ inputRef ကိုသုံးထားတဲ့ input box ထဲကရိုက်လိုက်တဲ့ value တွေကို console ပြန်ထုတ်ထားတာပါ
    }

    // လက်ရှိအချိန်ထိသင်ထားပြီးသား prop တွေကို stateless တွေလို့ခေါ်တယ် (ညိတွယ်မှုမရှိတဲ့အဓိပ္ပာယ်)
        
    // useState စမယ် useState က Array Destructuring နည်းနဲ့သုံးတယ်
    // initialState ကတော့ မူရင်းအခြေအနေကိုဆိုလိုပြီး, setInitialState ကတော့မူရင်းကိုပြန်လည် ပြင်ဆင်လိုက်တဲ့ အခြေအနေကိုဆိုလိုပါသည်
    const [initialState, setInitialState] = useState("Hello");
    // initialState က useState ထဲမှာ ထည့်လိုက်တဲ့တန်ဖိုးတွေကို ကိုယ်စားပြုပြီး initialState ကိုပြင်ချင်တယ်ဆိုမှ setInitialState ကိုသုံးရတယ်

    // လက်ရှိအတိုင်းဆို useState() ထဲမှာ "Hello" ရှိနေပြီး "Hello" ကိုပြန်ပြင်ချင်တယ်ဆိုရင် setInitialState ကိုသုံးရမယ်
    const handleHook = () => {
        // setInitialState ထဲမှာ တန်ဖိုးအသစ်ထည့်လိုက်ရုံနဲ့ h2 element ကိုနှိပ်ရင် handleHook အလုပ်လုပ်ပြီး Hello ကပြောင်းသွားမယ်
        setInitialState("No Hello!")
    }

    // ဒါဆိုရင် အောက်မှာ useState() ထဲက 0 တန်ဖိုးကို အောက်က p element ကိုနှိပ်ရုံနဲ့ 1 ပေါင်းသွားမယ့်ပုံစံရေးထားခြင်းဖြစ်ပါတယ်
    const [start, updateStart] = useState(0);
    const handleCountHook = () => {
        updateStart(start + 1);
    }

    return (
    <div>
        <h2 onClick={handleHook} className={textWhite}>{initialState}</h2>
        <p onClick={handleCountHook} className={textWhite}>{start}</p>
        <form className='formBox'>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default Hookstart