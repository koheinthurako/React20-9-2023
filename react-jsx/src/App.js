import './App.css';
import {Fragment} from "react";

function App() {
  const name = "Ko Hein";
  const arr = ["Ko Hein", 24, "Male"];
  const boolean = false;
  const textRed = "text-red";
  const textBlue = "text-blue";

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
    </div>
  );
}

export default App;
