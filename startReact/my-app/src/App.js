import logo from './logo.svg';
import './App.css';

// react တွင် JSX ကိုသုံးသည်
// jsx = JavaScript Syntax Expression
// react မှာ JavaScript reserved words တွေကို သုံးလို့မရတော့ပါ
// ဥပမာ html ထဲက class ဆိုရင် jsx မှာ className ဖြစ်သွားတယ်
// HTML subclosing tag တွေဖြစ်တဲ့ <br>, <hr>, <input> etc... တို့ကို jsx တွင်

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <label htmlFor='hello'>Hello</label>
      <input type='text' name='hello' id='hello' />
    </div>
  );
}

export default App;
