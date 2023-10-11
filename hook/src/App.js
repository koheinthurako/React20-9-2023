import React from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import "./App.css";
import ComponentsOne from './components/ComponentsOne';
import ComponentEffect from './components/Effect/ComponentEffect';


const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* State ကိုသုံးပြီး user input ယူခြင်း */}
      {/* <hr/> */}
      {/* <Input/> */}
      {/* <ComponentsOne/> */}
      <ComponentEffect/>
    </div>
  )
}

export default App