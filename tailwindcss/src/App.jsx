import React from 'react';
import "./index.css";

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
        <li>
          <p className='mb-5 leading-loose text-white bg-black p-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam voluptate dicta veritatis ad, laborum dolorum ratione eius quaerat assumenda rerum sint sapiente omnis maiores hic, ex reprehenderit corporis! Suscipit, adipisci!
          </p>
        </li>
        <li>
          <p className='mb-5 font-mono'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem beatae reprehenderit nam tempora vero, necessitatibus odit. Perspiciatis assumenda numquam sint voluptas nobis autem error, reprehenderit molestias dolore, eius quae.
          </p>
        </li>
        <li>
          <p className='mb-5 tracking-widest'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione corrupti enim? Perferendis, earum veniam, vero quibusdam sed vitae nisi corporis ducimus dolorem nostrum sint perspiciatis aliquam repellendus! Necessitatibus, ad.
          </p>
        </li>
      </ul>
      <div className='flex justify-center my-16 gap-12'>
        <button className='bg-purple-700 px-[50px] py-3 rounded-md text-white'>Button 1</button>
        <button className='bg-pink-700 px-5 py-3 rounded-md text-white'>Button 2</button>
        <button className='bg-orange-700 px-[50px] py-3 rounded-md text-white'>Button 3</button>
      </div>
      <div className='container mx-auto bg-red-900 h-screen divide-y'>
        <div className='p-10 text-white flex flex-col gap-12'>
          <p className='border-4 p-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo expedita quam officiis adipisci non modi, iure quos voluptas veritatis facilis maxime nesciunt deserunt repellendus facere dolorum explicabo sapiente impedit ratione.
          </p>
          <p className='border-2 border-dashed border-b-8 p-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo expedita quam officiis adipisci non modi, iure quos voluptas veritatis facilis maxime nesciunt deserunt repellendus facere dolorum explicabo sapiente impedit ratione.
          </p>
          <p className='border-indigo-200 border-b-8 p-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo expedita quam officiis adipisci non modi, iure quos voluptas veritatis facilis maxime nesciunt deserunt repellendus facere dolorum explicabo sapiente impedit ratione.
          </p>
          <p className='border-x-8 p-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo expedita quam officiis adipisci non modi, iure quos voluptas veritatis facilis maxime nesciunt deserunt repellendus facere dolorum explicabo sapiente impedit ratione.
          </p>
        </div>
      </div>
      <div className='flex justify-center my-16 gap-12'>
        {/* connect btn class that is within index.css  */}
        <button className='btn bg-cyan-100 hover:shadow-orange-600 hover:bg-orange-600 hover:text-white'>Button 1</button>
        <button className='btn bg-purple-100 hover:shadow-pink-600 hover:bg-pink-600 hover:text-white'>Button 2</button>
        <button className='btn bg-pink-100 hover:shadow-red-600 hover:bg-red-600 hover:text-white'>Button 3</button>
        <button className='btn bg-red-100 hover:shadow-cyan-600 hover:bg-cyan-600 hover:text-white'>Button 3</button>
      </div>
      <div className='flex gap-12 my-12'>
        <h1 className='text-5xl opacity-25 sm:text-red-900'>Hello World</h1>
        <h1 className='text-5xl opacity-60 md:text-blue-900'>Hello World</h1>
        <h1 className='text-5xl opacity-80'>Hello World</h1>
        <h1 className='text-5xl opacity-100'>Hello World</h1>
      </div>
      <div className="flex flex-wrap flex-row-reverse justify-center gap-5 mb-12 bg-black p-12">
        <div className='w-20 h-20 text-white text-center py-6 bg-red-500'>1</div>
        <div className='w-20 h-20 text-white text-center py-6 bg-blue-500'>2</div>
        <div className='w-20 h-20 text-white text-center py-6 bg-orange-500'>3</div>
        <div className='w-20 h-20 text-white text-center py-6 bg-pink-500'>4</div>
        <div className='w-20 h-20 text-white text-center py-6 bg-purple-500'>5</div>
      </div>
      {/* Position */}
      <div className="relative w-1/2 bg-gray-900 h-40">
        <div className="absolute top-0 right-10 bg-red-500 w-32 h-32 hover:bg-blue-500"></div>
        <div className="absolute bottom-0 left-10 bg-yellow-500 w-32 h-32 hover:static hover:bg-purple-500"></div>
      </div>
    </div>
  )
}

export default App;