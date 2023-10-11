import { useEffect } from "react";

// useEffect အစ
// componentDidMount, componentDidUpdate, and componentWillUnmount
// Mounted ဆိုတာ virtual DOM ကနေ screen ပေါ်ကို ရောက်လာတဲ့အချိန်ကို Mounted ဖြစ်တယ်လို့ခေါ်တယ်

/* componentDidMount */
// virtual DOM ကနေ screen ပေါ်ကိုရောက်လာတာနဲ့ componentDidMount ကအလုပ်လုပ်တယ်

/* componentDidUpdate */
// ချိတ်ဆက်ထားတဲ့ components ထဲက state ပဲဖြစ်ဖြစ်ဘာဖြစ်ဖြစ် တစ်ခုခုပြောင်းလဲသွားတိုင်း componentDidUpdate method ကအလုပ်လုပ်တယ်

/* componentWillUnmount က cleanUp နဲ့တူတယ် */
// ဒီ method ကတော့ <a> tag တို့လို လက်ရှိရောက်နေတဲ့ screen ကိုဖျက်ချပြီးနောက်တစ်ခုကိုလုပ်သွားတိုင်း componentWillUnmount method ကအလုပ်လုပ်တယ်

// useEffect ဆိုတာ componentDidMount, componentDidUpdate, and componentWillUnmount ဒီသုံးခုလုံးပေါင်းထားတာနဲ့တူတယ်

const ComponentEffect = () => {

    useEffect(() => {
        console.log("Use Effect start");
    })
    
  return (
    <div>ComponentEffect</div>
  )
}

export default ComponentEffect;