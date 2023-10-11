import { useEffect, useState } from "react";

// useEffect အစ
// componentDidMount, componentDidUpdate, and componentWillUnmount
// Mounted ဆိုတာ virtual DOM ကနေ real screen ပေါ်ကို ရောက်လာတဲ့အချိန်ကို Mounted ဖြစ်တယ်လို့ခေါ်တယ်

/* componentDidMount */
// virtual DOM ကနေ real screen ပေါ်ကိုရောက်လာတာနဲ့ componentDidMount ကအလုပ်လုပ်တယ်

/* componentDidUpdate */
// ချိတ်ဆက်ထားတဲ့ components ထဲက state ပဲဖြစ်ဖြစ်ဘာဖြစ်ဖြစ် တစ်ခုခုပြောင်းလဲသွားတိုင်း componentDidUpdate method ကအလုပ်လုပ်တယ်

/* componentWillUnmount က cleanUp နဲ့တူတယ် */
// ဒီ method ကတော့ <a> tag တို့လို လက်ရှိရောက်နေတဲ့ screen ကိုဖျက်ချပြီးနောက်တစ်ခုကိုလုပ်သွားတိုင်း componentWillUnmount method ကအလုပ်လုပ်တယ်

// useEffect ဆိုတာ componentDidMount, componentDidUpdate, and componentWillUnmount ဒီသုံးခုလုံးပေါင်းထားတာနဲ့တူတယ်

const ComponentEffect = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    // mounted => ComponentsMounted
    useEffect(() => {
        console.log("Mounted");
        // အဆုံးမှာ ဒီလို [] ထည့်ပေးလိုက်ခြင်းဖြင့် mounted ဖြစ်တဲ့အချိန်မှာပဲအလုပ်လုပ်စေတယ်
    }, [])

    // didComponents
    useEffect(() => {
        console.log("I am didComponents", count);
    })

    // components will update when value was change
    useEffect(() => {
        console.log("toggle was changed");
    }, [toggle]);
    
    const handleClick = () => {
        setCount(pre => pre + 1);
    }

    const handleToggle = () => {
        setToggle(pre => !pre);
    }

  return (
    <div>
        <p>{count}</p>
        {toggle && <h1>Hello</h1>}
        <button onClick={handleClick}>Add</button>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default ComponentEffect;