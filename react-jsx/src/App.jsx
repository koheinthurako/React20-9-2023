import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SlideBar from "./components/SlideBar";
import "../src/App.css";
import Propslist from "./components/Propslist";
import { useRef, useState } from "react";
import Form from "./components/Form";

const App = () => {

  // const data = ["Ko Hein", "Thet Zaw Hein", "Captain"];

  // Hook ဆိုတာဘာလဲ Hook ဆိုတာ DOM Access လုပ်နိုင်ပြီး vanilla တုန်းကလို program တစ်ခုရေးဖို့ code တွေအများကြီးရေးစရာမလိုတော့ပဲ
  // react မှ support လုပ်ထားတဲ့ အရာတွေဖြစ်ပြီး ထိုအရာတွေကို သိတာနဲ့ program အလွယ်တကူရေးနိုင်တယ်

   // Using useRef hook

   // useRef ကို input ထဲတွင် ref ဆိုသည့် props ကို အသုံးပြု၍ခေါ်ရပြီး useRef hook ကိုအသုံးပြုလိုက်ခြင်းသည် document.getElementById DOM နည်းတူဆင်တူသည်
   // inputRef ထဲတွင် current ဆိုသည့် react library မှ support ပေးသော box တစ်ခုဝင်သွားပြီး ထို box ထဲတွင် DOM method များလည်းပါဝင်သည်
   const handleClick = (name) => {
     // console.log(inputRef);
     // inputRef.current.focus();
     // inputRef.current.style.borderColor = "red";
     // console.log(inputRef.current.value);
     const data = {};
     data.name = name;
     data.isDone = false;
     data.id = Math.random(Date.now()) * 10000000000; // set unique key
 
     setInitialState([...initialState, data]);
   }
 
   // const [initialState, setInitialState] = useState(0);
   // const [initialState, setInitialState] = useState("Hello");
   // initialState က ထည့်လိုက်တဲ့တန်ဖိုးဖြစ်ပြီး setInitialState ကတော့ တန်ဖိုးတွေကို ပြန်လည်ပြင်ဆင်မယ့် method ဖြစ်တယ်
   // useState ထဲက "Hello" သည် initialState ဖြစ်သွားပြီးအောက်က return ထဲမှာ ထည့်ရေးလိုက်တာနဲ့ rendering လုပ်သွားသည်
   // setInitialState ကတော့ ပြန်ပြင်တာ အပေါ်က hancleClick မှာ setInitialState ကို ပြန်ပြင်လိုက်တာနဲ့ တန်ဖိုးကိုတစ်ခါတည်းပြောင်းပြီး rendering လုပ်သွားသည်
 
   // const showText = () => console.log(inputRef.current.innerText = "Hello World");
 
   const [initialState, setInitialState] = useState([
     {id:1, name: "Ko Hein", gender: "Male"},
     {id:2, name: "Captain", gender: "Male"},
     {id:3, name: "Thet Zaw hein", gender: "Male"}
   ]);

  return (
    <div className="container">
      <Nav/>
      {/* <div className="midContainer">
        <SlideBar/>
        <Main/>
      </div> */}
      {/* 
        Props အကြောင်းအစ
        အပေါ်က data array ထဲက data တွေကို အောက်က propslist ထဲ data တွေ လှမ်းပေးချင်ရင် props အနေနဲ့ပေးလို့ရတယ်
        Props ဆိုတာက HTML မှာ Attribute လို့ခေါ်တယ် Parent Level ဖြစ်တဲ့ App ကနေ child level ဖြစ်တဲ့ Propslist ထဲကို
        data passing ပေးချင်ရင် props နဲ့ passing ပေးတယ် rendering လုပ်တော့ propslist ကို လှမ်းခေါ်တဲ့အခါ Propslist.jsx
        ထဲက arrow function က အလုပ်လုပ်သွားပြီး props ဖြစ်တဲ့ name ကို ဟိုဘက်က function parameter ထဲ passing
        ပေးလိုက်ပြီး object တွေလို data array ထဲက တန်ဖိုးတွေကို ပြန်ခေါ်သုံးလို့ရသွားတယ်
      */}
      {/* <Propslist name={data[0]} age={24} isDone/>
      <Propslist name={data[1]} age={24} isDone={false}/>
      <Propslist name={data[2]} age={24} isDone/> */}


      {/* 
        START HOOKS
        Using useRef hook
      */}
        {/* 
          အပေါ်က inputRef ရဲ့ DOM properties တွေကို အောက်က input tag ထဲသို့ လက်ဆင့်ကမ်းပေးလိုက်ခြင်းဖြစ်ပြီး
          DOM Property တွေကို input box မှလည်း ခေါ်သုံးလို့ရသွားသည် 
        */}
      {/* <form className="formContainer">
        <input ref={inputRef} type="text" placeholder="Write something..."/>
        <button onClick={handleClick}>Add</button>
      </form> */}
      {/* အပေါ်က form code တွေကိုမသုံးတော့ပဲ ဒီနေရာမှာ form components အသစ်တစ်ခုစခွဲလိုက်ပါပြီ */}
      <Form onSubmit={handleClick}/>

      {/* Using useState */}
      <div className="listMainBox">
        {initialState.map((i) => <Propslist key={i.id} data={i.name}/>)}
      </div>

      <Footer/>

    </div>
  )
}

export default App;