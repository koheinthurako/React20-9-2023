// function greet() {
//     return "Hello World";
// }

const greet = () => "Hello World";

console.log(greet());


function add(x, y) {
    return x + y;
}
console.log(add(10,5));

const add2 = (x, y) => x + y;

console.log(add2(10, 2));


const array = () => [1,2,3,4,5];

console.log(array());

// const obj = () {name: "TZH"}; // This is error bez of normal arrow function syntax you should code like below
// // This is normal function passing object
// const obj = () => {
//     return {name:"TZH"}
// }

// This is new writting format in react;
const obj = () => ({name:"TZH", age: 25});

console.log(obj());


const obj2 = {
    name: "TZH",
    age: 24,
    gender: "Male",
    // regular function ထဲက this keyword က obj တစ်ခုလုံးကို ကိုယ်စားပြုတယ် 
    regular() {
        return this;
    },
    // arrow function ထဲက this keyword က window တစ်ခုလုံးကို ကိုယ်စားပြုတယ်
    arrow:() => {
        return this;
    }
}

console.log(obj2);
console.log(obj2.regular());
console.log(obj2.arrow());


// Function သည်လည်း object တစ်ခုဖြစ်လို့ new keyword နဲ့ new Function() ဆိုပြီး Constructor ဆောက်ပြီးသုံးလို့ရတယ်
// Constructor တွေသည် object တစ်ခုစဆောက်တဲ့အချိန်မှာ ကြားထဲမှာ သူအရင်အလုပ်လုပ်ပြီးမှ လိုအပ်တဲ့ Object ကိုဆောက်ပေးသည်

const fun = new Function("a", "b", "return a + b");
// a & b က Parameter ကနေ fun(a, b) value တွေအဖြစ်ဝင်သွားပြီး return a + b က logic အနေနဲ့ အလုပ်လုပ်သွားပါတယ်
console.log(fun(2,3));

console.dir(Function);


// REACTw မှာအသုံးများတဲ့ function prototype များ 
// Function.prototype.bind()

const fun2 = new Function("a", "b", "return a + b").bind(null, 2,5);
/* bind ကို သုံးလျှင် null keyword ကို ထည့်ပေးရပြီး ပုံမှန်ဆို အောက်က console မှာ fun2(2,3) ဆိုပြီး ထည့်ပေးရပေမယ့် bind prototype သည်
fun2(a, b) နေရာကို bind ထဲက 2, 3 ကို ပေါင်းထည့်ပေးသွားသည့်အတွက် အလုပ်လုပ်သွားပါတယ် */


console.log(fun2())