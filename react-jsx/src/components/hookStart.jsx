import "./Hookstart.css";
import { useRef } from "react";

// Hook အကြောင်းစမယ် အောက်မှာ form တစ်ခုရှိတယ် သူ့နဲ့ဆိုင်တဲ့ action တွေလုပ်တော့မယ်ဆိုရင် useref hook ကနေစမယ်
// useref ကို react library က provide ပေးထားပါတယ် သူ့ကိုယူသုံးဖို့ဆိုရင် react ကနေ object destruction ကိုသုံးပြီး useref ကို import လုပ်
// useref က ref container တစ်ခုပဲ သူ့အထဲမှာ .current ဆိုတဲ့ object တစ်ခုပါတယ် သူ့ထဲမှာပါတဲ့ function တွေကိုယူသုံးလို့ရပါတယ်
// ref ဆိုတာကတော့ သူ့ရဲ့ current ဆိုတဲ့ box ထဲမှာ ကိုယ်လုပ်ချင်တာကိုပေးသိမ်းလိုက်ပြီး document.getElementById() တို့လို DOM ကိုလည်း access လုပ်နိုင်ပါတယ်
// ref ကိုစမသုံးခင် initialize လုပ်ရမယ်

const Hookstart = () => {

    // useRef တို့ကိုလည်း hook လို့ခေါ်တယ်
    const inputRef = useRef();

    // hook တွေကိုသုံးချင်ရင် ref ဆိုတဲ့ prop လေးကိုသုံးပြီး input element မှာလိုရေးပေးရတယ်
    // input ထဲမှာ ref တစ်ခုကို inputRef ဆိုတဲ့နာမည်နဲ့ attach လုပ်လိုက်တော့ ref ထဲမှာရှိတဲ့ .current ဆိုတဲ့ Object ထဲက DOM Access တွေကိုသုံးလို့ရသွားပါတယ်

    const handleClick = (e) => {
        e.preventDefault();
        // focus ကတော့ input ကိုနှိပ်လိုက်တာနဲ့ နှိပ်လိုက်တဲ့ အကွက်ကို focus သွားလုပ်သွားမှာဖြစ်ပါတယ်
        // ပြန်ရှင်းရရင် inputRef ဆိုတာကတော့ ကိုယ်တစ်ခုခုလုပ်စေချင်တဲ့ element တစ်ခုကို လှမ်းဖမ်းလိုက်တဲ့ နာမည်ပေးလိုက်သည့် hook တစ်ခုဖြစ်ပြီး
        // သူ့ကို button တစ်ခု၏ function တစ်ခုကနေ inputRef variable ကိုပြန်သုံးကာ inputRef.current ထဲက DOM Access Control လုပ်နိုင်တာပါ
        inputRef.current.focus();
        inputRef.current.style.borderColor = "red";
        console.log(inputRef.current.value);
        // အပေါ်က console.log() ကတော့ inputRef ကိုသုံးထားတဲ့ input box ထဲကရိုက်လိုက်တဲ့ value တွေကို console ပြန်ထုတ်ထားတာပါ
    }

    return (
    <div>
        <form className='formBox'>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default Hookstart