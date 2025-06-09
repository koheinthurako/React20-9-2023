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

let numbers = [1, 2, 3];
let [first, second, third ] = numbers;
// ဒါက Array Destructuring လို့ခေါ်တယ်
// Destructuring က Array ထဲက တန်ဖိုးတွေကို တစ်ခုချင်းစီထွက်လာတယ်   
console.log(first, second, third);

// ပြီးတော့ first ကို ၃ ပေါင်းလိုက်တယ်
first += 3;
console.log(first);
// ဒါဆိုရင်တော့ first က 4 ဖြစ်သွားတယ် (မူရင်း first တန်ဖိုးပြောင်းသွားပါပြီ)

const alphabetics = ["a", "b", "c"];
// ပြီးတော့ first ကို alphabetics array ထဲမှာ ထည့်လိုက်တယ်
const testBoth = [first, ...alphabetics];
console.log(testBoth); // [1, "a", "b", "c"]
console.log(first + " is the Original value of numbers array");
console.log(testBoth[0] + " is also the first number in testBoth array");
// ဒါဆိုရင်တော့ Array Destructuring ကိုသုံးထားတဲ့ တန်ဖိုး first က ၄ ဖြစ်သွားပြီး testBoth Array ထဲဝင်သွားပါပြီ


testBoth[1] = "d";
// ဒါကတော့ ...alphabetics ဆိုတဲ့ Spread Operator မှတစ်ဆင့် testBoth ရဲ့ Array 1 အခန်းထဲကို တန်ဖိုးပြောင်းထည့်လိုက်တာဖြစ်ပါတယ်
console.log(testBoth); // [1, "d", "b", "c"]
// ဒါဆိုရင်တော့ testBoth Array ထဲမှာပဲ တန်ဖိုးပြောင်းသွားပြီး မူရင်းတန်ဖိုးဖြစ်တဲ့ Alphabetics Array ထဲမှ မူရင်းတန်ဖိုးက မပျက်စီးသွားပါဘူး
console.log(`${testBoth[1]} changed from ${alphabetics[0]} in testBoth array`);
console.log(alphabetics[0] + " is the first letter in alphabetics array");

alphabetics[0] = "z"; // Update the first element of alphabetics array
console.log(alphabetics[0] + " is updated in original alphabetics array");
console.log(alphabetics + " original array after update");
// ဒါဆိုရင်တော့ alphabetics Array ထဲမှာပဲ တန်ဖိုးပြောင်းသွားပြီး testBoth Array ထဲမှာ မူရင်းတန်ဖိုးက မပျက်စီးသွားပါဘူး
console.log(testBoth + " is the testBoth array");   
// ဒါကတော့ Spread Operator နဲ့ Array Destructuring တန်ဖိုးပြောင်းသွားတဲ့ပုံစံကို တွဲဖက်သုံးတဲ့ နမူနာဖြစ်ပါတယ်



// REST
// const rest = (x, y, ...rest) => {
//     console.log(x, y, ...rest);
// }
// rest(2, 3, 4, 5, 6, "Ko Hein", true);




// Spread & Rest ကွာခြားပုံ
// Rest က Paramter "()" ကွင်ထဲမှာ သုံးရပြီး တန်ဖိုးက မူရင်းတန်ဖိုးတွေအတိုင်း တစ်ခုချင်းစီထွက်လာတယ်
// Spread ကတော့ Array အသစ်တစ်ခုအနေနဲ့ ပြန်ထွက်လာတယ်


console.log("Rest Started Here ⬇️⬇️⬇️⬇️")

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
// ဒါဆိုရင်တော့ သိသိသာသာ ပြောင်းလဲချက်ကိုမြင်နိုင်ပါတယ်
// Spread Syntax ကိုသုံးထားတဲ့ array ဆိုတဲ့အထဲက တန်ဖိုး ပြောင်းသွားပေမယ့်
// မူရင်း data ဆိုတဲ့ထဲက တန်ဖိုးတွေက မပျက်စီးသွားပါဘူး
console.log(array); // [1, 2, 10, 4, 5]
console.log(data); // [1, 2, 3, 4, 5]
