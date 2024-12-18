import {useState, memo} from "react";
import "./Counter.css";

// Basic Hooks
// useState, useEffect, useContext

// State တစ်ခု change တိုင်း components တွေကို Rerender ပြန်လုပ်တယ် - အရေးကြီးတယ်
// ဆိုလိုရင်းက ဒီထဲက State တစ်ခုချိန်းသွားရင် ဒီထဲက Code တွေအကုန်ပြန်အလုပ်လုပ်ပြီး ဒီထဲမှာပါတဲ့ Child တွေကအစ အကုန်ပြန် Render လုပ်ပါတယ်

const Counter = ({data}) => {
    const [count, setCount] = useState(0);
    // count က useState() ထဲမှာကိုယ်စားပြုသည့် '0' ကို ကိုယ်စားပြုသည်

    const handleAdd = (x) => {
        // အောက်က unsafe state change ဖြစ်တယ် ဘာလို့လဲဆိုတော့ looping ပတ်ပြီး setCount မှာ count ကို ၁ တိုးပေမယ့်
        // console.log(count) နေရာတော့ useState(0) အထဲက 0 ကိုပဲသွားပြီး console ထုတ်ပြနေတယ် ဒါကြောင့် unsafe state ဖြစ်တယ်
        // for(let i = 0; i < 10; i++) {
        //     console.log(count);
        //     setCount(count + 1);
        // }

        // အောက်က safe state change ဖြစ်တယ် ဘာလို့လဲဆိုတော့ looping ပတ်ပြီး setCount ထဲက preCount ဆိုတာက အပေါ်ကလိုမဟုတ်ပဲ
        // loop တစ်ခါပတ်တိုင်း const preCount = useState(count) ပုံစံဖြစ်သွားပြီး useState ထဲက တန်ဖိုးက loop အလိုက်ပြောင်းလဲနေသည့်အတွက်
        // console.log(preCount) သည် loop ပတ်တိုင်းပြောင်းလဲပြီး မတူညီတဲ့ တန်ဖိုးများထွက်လာသည့်အတွက် safe state ဖြစ်တယ်
        // for(let i = 0; i < 10; i++) {
        //     setCount((preCount) => {
        //         // ဒီက preCount ဆိုတာ useState ထဲက count တန်ဖိုးကိုပဲကိုယ်စားပြုသည်
        //         console.log(preCount);
        //         return preCount + 1;
        //     });
        // }

        // Shorten syntax
        setCount(pre => pre + x);
        
    };

    const handleRemove = (x) => {
        setCount(pre => pre - x);
    };

    console.log("Child rendering");

  return (
    <div className="contentBox">
        <p>{data}</p>
        <p>{count}</p>
        <div className="btnBox">
            <button onClick={() => {
                handleAdd(2);
            }}>Add</button>
            <button onClick={() => {
                handleRemove(2);
            }}>Remove</button>
        </div>
    </div>
  )
}

// export default Counter;
export default memo(Counter);
// memo ရေးနည်းကို class components မှာ pureComponents လို့ခေါ်တယ်
