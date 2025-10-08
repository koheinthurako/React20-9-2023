// module နဲ့ code ခွဲရေးခြင်းက Maintain လုပ်ရလွယ်ကူတယ်
// Export တွေကိုတော့ သေချာမှတ်ထားပေးပါ

// import mySelf from "./module2.js";
// module2 ထဲက export default id; ဆိုတာ default ပါလာရင် id ထဲက data အကုန်လုံးကို ယူလာပြီး ဒီဘက် file မှာ id အစား ကြိုက်တဲ့နာမည်ပေးလို့ရတယ်
// သို့သော် default သည် js file တစ်ခုလုံးမှာ တစ်ခါပဲ ရေးလို့ရတယ်
// console.log(mySelf.name, mySelf.age, mySelf.gender);

// import {id2} from "./module2.js";
/* export မှာ default မပါတာကို import လှမ်းယူမယ်ဆိုရင် module2.js file တစ်ခုလုံးထဲကို Destructuring လုပ်ပြီး လှမ်းဖမ်းရသည့်အတွက်
default တုန်းကလို တခြားနာမည်ပေးလို့မရတော့ပဲ key "name, age, gender" ဆိုတာတွေ တူမှသာလျှင်ရပါသည် */

// default မပါပဲ နာမည်ပြောင်းချင်တယ်ဆိုရင်တော့ as keyword ကိုသုံးပါ
// import {id2 as mySelf2} from "./module2.js";
// console.log(mySelf2.name, mySelf2.age, mySelf2.gender);

// "," comma ခံရေးနည်း
// import mySelf, {id2 as mySelf2} from "./module2.js";
// ဒီမှာ mySelf က module2.js ထဲက default id ဆိုတာကို ယူလာတာဖြစ်ပြီး id2 ကိုတော့ mySelf2 အနေနဲ့နာမည်ပြောင်း သုံးလိုက်တာဖြစ်ပါတယ် default မပါပဲ နာမည်ပြောင်းပြီး ယူလာတာဖြစ်ပါတယ်
// console.log(mySelf.name, mySelf.age, mySelf.gender, mySelf2.name, mySelf2.age, mySelf2.gender);

// အကုန်လုံး All Accept လုပ်ချင်တယ်ဆိုရင်တော့
// import * as mySelf from "./module2.js";
// console.log(mySelf.default, mySelf.id2);
// console.log(mySelf.default.name, mySelf.default.age, mySelf.default.gender, 
//     mySelf.id2.name, mySelf.id2.age, mySelf.id2.gender);


// var x = "Hello";
// ဒီလို declare လုပ်ရင် browser console က window ထဲမှာ x က တန်ဖိုးဝင်သွားလိမ့်မယ် ဒါပေမယ့် index.html ထဲက script မှာ module ကို ဖြုတ်ထားမှရမယ်
// type="module" ကိုမဖြုတ်ပဲ ဒီလိုရေးရင် window.x ထဲမှာ တန်ဖိုးက undefined ဖြစ်နေလိမ့်မယ် module ကို လိုအပ်မှသုံးပါ
