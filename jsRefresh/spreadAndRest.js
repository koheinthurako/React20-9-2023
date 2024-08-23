/* 
    The spread (...) syntax allows an iterable, such as an array or string,
    to be expanded in places where zero or more arguments (for function calls) or
    elements (for array literals) are expected. In an object literal, the spread syntax
    enumerates the properties of an object and adds the key-value pairs to the object being created.
*/

// const id = {
//     name: "Ko Hein",
//     age: 24,
//     gender: "Male"
// }

// const mine = {
//     // Copy id object to mine using spread operator (...)
//     ...id
// }

// console.log(id);
// console.log(mine);

// const one = [1, 2, 3, 4, 5];
// console.log(one);

// const two = [6, 7, 8, 9, 10]
// console.log(two);

// Copy one and two arrays' values using spread operator
// Destructuring နဲ့ Spread ကွာခြားချက်က Destructuring က ရှိပြီးသား value ထဲက တန်ဖိုးကိုဆွဲထုတ်ပြီး
// Spread ကတော့ မူရင်းကိုမပျက်စီးစေပဲ နောက်ထပ် state တစ်ခု လိုချင်တဲ့ အခါမှာ Spread Operator ကို သုံးတယ်
// const three = [...one, ...two];
// console.log(three);
// 


// REST
// const rest = (x, y, ...rest) => {
//     console.log(x, y, ...rest);
// }
// rest(2, 3, 4, 5, 6, "Ko Hein", true);




// Spread & Rest ကွာခြားပုံ
// Rest က Paramter "()" ကွင်ထဲမှာ သုံးရပြီး တန်ဖိုးက မူရင်းတန်ဖိုးတွေအတိုင်း တစ်ခုချင်းစီထွက်လာတယ်
// Spread ကတော့ Array အသစ်တစ်ခုအနေနဲ့ ပြန်ထွက်လာတယ်




// Using Default Parameter
// const test = (x=2, y=3) => {
//     return x + y;
// }

// console.log(test());
// console.log(test(3, 4));



// Using spread operator with destructuring
const data = [1, 2, 3, 4, 5];

const [one, two, ...array] = data;
console.log(one, two, array);

array[0] = 10;
console.log(array);
console.log(data);
