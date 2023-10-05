import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SlideBar from "./components/SlideBar";
import "../src/App.css";
import Propslist from "./components/Propslist";
import { useRef } from "react";

const App = () => {

  const data = ["Ko Hein", "Thet Zaw Hein", "Captain"];

  // Using useRef hook
  const inputRef = useRef();

  // useRef ကို input ထဲတွင် ref ဆိုသည့် props ကို အသုံးပြု၍ခေါ်ရပြီး useRef hook ကိုအသုံးပြုလိုက်ခြင်းသည် document.getElementById DOM နည်းတူဆင်တူသည်
  // inputRef ထဲတွင် current ဆိုသည့် react library မှ support ပေးသော box တစ်ခုဝင်သွားပြီး ထို box ထဲတွင် DOM method များလည်းပါဝင်သည်
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(inputRef);
    // inputRef.current.focus();
    // inputRef.current.style.borderColor = "red";
    console.log(inputRef.current.value)
  }

  // const showText = () => console.log(inputRef.current.innerText = "Hello World");

  return (
    <div className="container">
      <Nav/>
      <div className="midContainer">
        <SlideBar/>
        <Main/>
      </div>
      {/* 
        Props အကြောင်းအစ 
        အပေါ်က data array ထဲက data တွေကို အောက်က propslist ထဲ data တွေ လှမ်းပေးချင်ရင် props အနေနဲ့ပေးလို့ရတယ်
        Props ဆိုတာက HTML မှာ Attribute လို့ခေါ်တယ် Parent Level ဖြစ်တဲ့ App ကနေ child level ဖြစ်တဲ့ Propslist ထဲကို
        data passing ပေးချင်ရင် props နဲ့ passing ပေးတယ် rendering လုပ်တော့ propslist ကို လှမ်းခေါ်တဲ့အခါ Propslist.jsx
        ထဲက arrow function က အလုပ်လုပ်သွားပြီး props ဖြစ်တဲ့ name ကို ဟိုဘက်က function parameter ထဲ passing
        ပေးလိုက်ပြီး object တွေလို data array ထဲက တန်ဖိုးတွေကို ပြန်ခေါ်သုံးလို့ရသွားတယ်
      */}
      <Propslist name={data[0]} age={24} isDone/>
      <Propslist name={data[1]} age={24} isDone={false}/>
      <Propslist name={data[2]} age={24} isDone/>


      {/* 
        START HOOKS
        Using useRef hook
      */}
      <form className="formContainer">
        {/* 
          အပေါ်က inputRef ရဲ့ DOM properties တွေကို အောက်က input tag ထဲသို့ လက်ဆင့်ကမ်းပေးလိုက်ခြင်းဖြစ်ပြီး
          DOM Property တွေကို input box မှလည်း ခေါ်သုံးလို့ရသွားသည် 
          */}
        <input ref={inputRef} type="text" placeholder="Write something..."/>
        <button onClick={handleClick}>Add</button>
      </form>

      <Footer/>

    </div>
  )
}

export default App;