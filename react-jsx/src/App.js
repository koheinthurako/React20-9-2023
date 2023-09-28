import './App.css';
import {Fragment} from "react";

function App() {
  return (
    // element ၁ခုထပ်ပိုပြီး return ပြန်ချင်တဲ့အခါ React ကို import လုပ်ပြီး React.Fragment ကိုသုံး
    <>
    <div className="App">
      <h1>Hello World</h1>
      <hr/>
      <br/>
      <input type='text' placeholder='write something...'/>
    </div>
    <div></div>
    </>
  );
}

export default App;
