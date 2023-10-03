import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SlideBar from "./components/SlideBar";
import "../src/App.css";
import Propslist from "./components/Propslist";

const App = () => {

  const data = ["Ko Hein", "Thet Zaw Hein", "Captain"];

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
        Props ဆိုတာက HTML မှာ Attribute လို့ခေါ်တယ် rendering လုပ်တော့ propslist ကို လှမ်းခေါ်တဲ့အခါ Propslist.jsx
        ထဲက arrow function က အလုပ်လုပ်သွားပြီး props ဖြစ်တဲ့ name ကို ဟိုဘက်က function parameter ထဲ passing
        ပေးလိုက်ပြီး object တွေလို data array ထဲက တန်ဖိုးတွေကို ပြန်ခေါ်သုံးလို့ရသွားတယ်
      */}
      <Propslist name={data[0]}/>
      <Propslist name={data[1]}/>
      <Propslist name={data[2]}/>
      <Footer/>

    </div>
  )
}

export default App;