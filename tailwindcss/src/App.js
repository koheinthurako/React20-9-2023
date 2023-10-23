import React from 'react'

const App = () => {
  return (
    <div className='m-12'>
      {/* 
        tailwind မှာ h1,h2,p ကွဲပေမယ့် index.css ထဲက @tailwind base ဆိုတဲ့ အပေါ်မူတည်ပြီး အလုပ်အရင်လုပ်တယ်
        အဲ့တာကြောင့် elements တွေအကုန်လုံးကို တညီတညွတ်တည်း p အနေနဲ့ပဲ default ချပြပါတယ်
        ပြီးမှ ကိုယ်ကြိုက်သလိုပြန်ပြင်ရပါတယ် custom css တွေရေးချင်ရင် postcss preprocessor ကို install လုပ်ပြီး သုံးရတယ်
      */}
      <h1 className='text-red-500 p-5 bg-black'>Hello World</h1>
      <h2 className='text-yellow-600 p-5 bg-red-900 my-5 text-2xl italic md:not-italic'>Hello World</h2>
      <p className='text-yellow-500 bg-blue-900 text-5xl italic hover:not-italic mb-5 p-5 font-bold'>Hello World</p>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  )
}

export default App;