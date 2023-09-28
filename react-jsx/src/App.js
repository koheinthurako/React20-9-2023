import './App.css';
import {Fragment} from "react";

function App() {
  const name = "Ko Hein";
  const arr = ["Ko Hein", 24, "Male"];
  const boolean = false;
  const textRed = "text-red";
  const textBlue = "text-blue";

  const click = () => console.log("Click");
  const valueClick = (x, y) => console.log(x, y);

  return (
    // element ၁ခုထပ်ပိုပြီး return ပြန်ချင်တဲ့အခါ React ကို import လုပ်ပြီး React.Fragment ကိုသုံး
    // <>
    // <div className="App">
    //   <h1>Hello World</h1>
    //   <hr/>
    //   <br/>
    //   <input type='text' placeholder='write something...'/>
    // </div>
    // <div></div>
    // </>

    // JSX ထဲမှာ javascript expression များညှပ်ရေးမယ်ဆို "{}" ထဲမှာရေးရတယ်
    <div className="App">
      <h1 className={boolean ? textRed : textBlue}>Hello World {5+5}</h1>
      <p>{name.toUpperCase()}</p>
      <p>{arr.join("-").toUpperCase()}</p>
      {/* conditional rendering */}
      {
        boolean && <p>I am true</p>
      }
      {/* event တွေထည့်ခဲ့ရင်တောင် HTML rendering လုပ်တဲ့အခါ ပါသွားမှာမဟုတ်ပါ */}
      {/* HTML တုန်းကလို onClick မှာ "()" ထည့်လို့မရပါ "click()" ဒီလိုထည့်လိုက်ရင် click event ကို တစ်ခါတည်း involve လုပ်သွားပြီး run သွားမှာပါ */}
      {/* <button onClick={click}>Click</button>
      <button onClick={click()}>Auto Click</button> */}

      {/* // parameter passing လုပ်ပြီး တန်ဖိုးပေးချင်တယ်ဆိုရင်တော့ onClick ရှေ့မှာ callBack function ထည့်ပေးရပါမယ် */}
      {/* <button onClick={() => valueClick("This is paramter passing click")}>Paramter Click</button> */}

      {/* ဒါဆိုရင် bind method ကို သုံးထားတဲ့အတွက်ကြောင့် အပေါ်ကလို callBack function တွေ ထည့်စရာမလိုတော့ပဲ click နှိပ်မှ run မယ်
      "()" ပါပေမယ့် auto အလုပ်မလုပ်တော့ဘူး */}

      <button onClick={valueClick.bind(null, "Hello World", "Hello Ko Hein")}>Click</button>
    </div>
  );
}

export default App;
