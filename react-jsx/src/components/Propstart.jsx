import List from "./List"
import { useRef, useState } from "react";

// Props အကြောင်းစမယ်
// ဒီ component ထဲမှာ List ဆိုတဲ့ children component ရှိတယ် ဒီထဲကနေသူ့ရဲ့ child component ထဲကို data passing ပေးချင်ရင်
// Prop ကိုသုံးနိုင်တယ်

const style = {
  buttonStyle: {
    backgroundColor: "orange",
    border: "none",
    padding: "12px 25px",
    fontSize: "19px",
    marginBottom: "15px",
    cursor: "Pointer",
    borderRadius: "9px"
  }
}

const Propstart = () => {

  const data = ["Hla", "Aye", "Aung"];

  // အပေါ်က data တွေကို List ထဲလှမ်းပေးချင်တယ်ဆိုရင် prop(name နေရာမှာကြိုက်တာရေးနိုင်တယ်) ကိုသုံးနိုင်တယ်
  
  const [initialState, setInitialState] = useState([
    {id: 1, name: "Thet", age: 26, location: "Yangon", isDone: false},
    {id: 2, name: "Zaw", age: 21, location: "Insein", isDone: true},
    {id: 3, name: "Hein", age: 25, location: "Vietnam", isDone: false}
  ]);

  // အောက်ကတော့ useState နဲ့ဆိုင်တဲ့ function အပိုင်းဖြစ်တယ်
  const inputRef = useRef();

  const handleClick = () => {
    const data = {};
    console.log(inputRef.current.value);
    data.name = inputRef.current.value;
    data.isDone = false;
    data.age = 25;
    data.id = Math.random(Date.now()) * 100000000;
    console.log(data);
    inputRef.current.value = '';

    // setInitialState က Data တွေကိုပြင်တယ်ဆိုပေမယ့် spreadOperator နဲ့တွဲပြီး အောက်ကလို အဟောင်းကောအသစ်ကော data တွေထပ်ထည့်လို့ရတယ်
    setInitialState([...initialState, data]);
    console.log(initialState)
  }

  const handleCheck = (id) => {
    console.log(id);
    console.log("Hello!");
    setInitialState(initialState.map(i => i.id === id ? {name:i.name, isDone:!i.isDone, id:i.id} : i));
    // setInitialState();
  }

  const handleEdit = () => {
    console.log("Edit is working");
  }

  const handleDelete = () => {
    console.log("Delete is working");
  }

  return (
    <div>
      {/* Props တစ်ခုကို name မပေးပဲ သူ့ဘာသာထည့်ပေးလိုက်ရင် default true ဖြစ်တယ် */}
        {/* <List name={data[0]} age={25} location="Yangon" isDone={true}/>
        <List name={data[1]} age={25} location="Insein" isDone={false}/>
        <List name={data[2]} age={25} location="Sagaing" isDone={false}/>
        <List name={data[2]} age={25} location="Sagaing" isDone/> */}

        {/* Props အကြောင်းပြီးသွားလို့ hook start က useState ကိုကြည့်ပြီးမှ အောက်က code တွေကိုဆက်ကြည့်ပါ */}
        {/* အပေါ်ကလို List တွေအများကြီးမရေးချင်လို့ useState ကိုသုံးပြီး looping ပတ်ထုတ်ချင်တယ်ဆိုရင် */}
        {/* အပေါ်က data နေရာတွေမှာ useState ထဲက Dynamic Object Array တွေဝင်သွားပြီး အောက်ကလို key နေရာမှာ custom id တွေထည့်ကာ */}
        {/* List ကို loop ပတ်ပြီးတော့ ထုတ်လို့ရသွားမှာပဲဖြစ်ပါတယ် */}
        {initialState.map(i => <List id={i.id} name={i.name} age={i.age} location={i.location} isDone={i.isDone} onChecked={handleCheck} key={i.id} onEdit={handleEdit} onDelete={handleDelete}></List>)}

        {/* ဒီတစ်ခါတော့ အောက်က button ကိုနှိပ်တာနဲ့ handleClick method ကနေတစ်ဆင့် useState ထဲက initialState မှာရှိတဲ့ တန်ဖိုးတွေအပြင်
          နောက်ထပ်တန်ဖိုးတွေပါ ထပ်ထည့်ခြင်းဖြစ်တယ် နောက်ထပ်တန်ဖိုးတွေထပ်ထည့်ဖို့အတွက် Array ရဲ့ spread operator ကိုသုံးလို့ရတယ်
        */}
        <div className="formBox">
          <input ref={inputRef} type="text" placeholder="Input Element in Propstart File"></input>
        </div>
        <button onClick={handleClick} style={style.buttonStyle}>Add more data</button>
    </div>
  )
}

export default Propstart