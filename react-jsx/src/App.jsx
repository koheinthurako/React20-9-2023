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

  const item = ["This is 1", "This is 2", "This is 3", "This is 4", "This is 5"];

  return (
    // element ၁ခုထပ်ပိုပြီး return ပြန်ချင်တဲ့အခါ React ကို import လုပ်ပြီး React.Fragment ကိုသုံး
    // Fragment shorten => <></>
    // <>
    // <div className="App">
    //   <h1>Hello World</h1>
    //   <hr/>
    //   <br/>
    //   <input type='text' placeholder='write something...'/>
    // </div>
    // <div></div>
    // </>

    // JSX ဆိုတာ javascript  ထဲမှာ HTML, CSS တွေပေါင်းရေးတာကိုဆိုလိုတယ်
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

      <div>

        {/* code တွေ အများကြီးရေးနေစရာမလိုအောင် ရေးချင်တဲ့ data တွေကို array ထဲထည့် loop ပတ်ပြီး rendering လုပ်နိုင်တယ်
        သို့သော် react သည် code တွေကို react-dom မှနေတစ်ဆင့် unique key တွေကို လှမ်းဖမ်းပြီး render လုပ်တဲ့အတွက် loop ပတ်တဲ့အခါ
        key တွေမပေးဘဲထားရင် Warning: Each child in a list should have a unique “key” prop. error တက်မယ်
        item ထဲက data တွေကို ဖျက်တာပြင်တာ စသဖြင့် ဘယ် item က ဘယ်လိုအလုပ်လုပ်သွားလဲဆိုတာကိုသိရန် data တစ်ခုချင်းစီကိုသိနိုင်ဖို့လည်း
        မတူညီတဲ့ unique keys တွေပေးဖို့လိုတယ် ဒါကြောင့် index လေးတွေကို အောက်ကနေထည့်ပေးလို့ရတယ် */}
        {
          // သို့သော် index ကို key အနေနဲ့ထည့်ခြင်းသည် မကောင်းပါ အပြောင်းအလဲမရှိတဲ့ static data နေရာမှာ အဆင်ပြေနိုင်ပေမယ့်
          // အပြောင်းအလဲရှိတဲ့ dynamic data တွေမှာဆို index သည် unique key အနေနဲ့ save မဖြစ်ပါ
          item.map((i, index) => <p key={index}>{i}</p>)
        }
      </div>

      {/* အောက်က function Button() ကို JSX ထဲမှာထည့်ချင်ရင် ရိုးရိုး HTML ရေးသလို အောင်ကလိုရေးလို့ရတယ် ဒါမှသာ document ထဲရောက်ပြီး အလုပ်လုပ်မယ် */}
      <Button/>
    </div>
  );
}

export default App;

// react တွင် function တို့သည် components တစ်ခုပဲဖြစ်တယ် components တွေတွင် return မဖြစ်မနေပြန်ရမယ်
// အောက်က function ကို document ထဲမှာ အလုပ်လုပ်စေချင်ရင် App level component ထဲမှာ မဖြစ်မနေထည့်ပေးရမယ်
function Button() {
  return <div>
    <p>I am Button</p>
  </div>
}