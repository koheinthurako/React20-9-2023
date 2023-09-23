/*  Loop Methods 
    for
    for of
    for in
    forEach
    while
    do while
    map
    filter
    find
    reduce
    some (conditional)
    every (conditional)
    include (conditional)
*/


const array = [1, 2, 3, 4, 5];

// Normal for loop
// for(let i = 0; i <= array.length-1; i++) {
//     console.log(array[i]);
// }



// for in loop က array index တွေကို ထုတ်ပေးသည်
// for (const key in array) {
//     console.log(key);
// }



// for of loop က array value တွေကို ထုတ်ပေးသည်
// for (const key of array) {
//     console.log(key);
// }



// forEach loop
// const test2 = array.forEach((i, index, array) => {
//     return i + 1;
// });
// console.log(test2);



// map loop
// const test = array.map((value, index, array) => {
//     // console.log(value, index, array);
//     return value + 1;
// });
// // Map က loop ပတ်ပြီး ပြန်လာတဲ့ return value တွေကို new array ကိုဆောက်ပေးသွားတယ်
// console.log(test);
// console.log(array);



// filter loop
// filter က loop ပတ်ပြီး Condition True ဖြစ်တဲ့ Value တွေကို new Array အနေဖြင့်ပြန်စစ်ထုတ်ပေးတယ်
// const fil = array.filter((value, index, array) => {
//     // console.log(value, index, array);
//     return value <= 3;
// });
// console.log(fil);



// find Loop
// find ကလည်း အကုန် loop ပတ်ပြီး Condition True တစ်ခုစဖြစ်တာနဲ့ Looping ရပ်တယ် return value ကို array အနေနဲ့မဟုတ်ပဲ
// သာမန်မူရင်း value တစ်ခုအနေနဲ့ပဲ ပြန်ထုတ်ပေးတယ်
// const find = array.find((value, index, array) => {
//     console.log(value, index, array);
//     return value === 3;
// });
// console.log(find);



// reduce loop
// array ထဲမှာရှိတဲ့ value အကုန်လုံးကိုပေါင်းပြီး result တစ်ခုတည်းအနေဖြင့် တစ်ခုခုထုတ်ချင်တဲ့အခါသုံးတယ်
// result ကို သာမန် value တစ်ခုအနေနဲ့ပြန်ထုတ်ပေးတယ်
// prev က array[0] အခန်းထဲက ပထမဆုံး value ဖြစ်ပြီး current ကတော့ array[1] ထဲက value
// const reduce = array.reduce((prev, current, index, array) => {
//     console.log(prev, current, index, array);
//     return prev + current;
// }, 0); // ဒီနေရာက 0 က initial value ဖြစ်တယ် သူ့ကိုထည့်ထားရင် prev value က 0 ဖြစ်နေပြီး current value က array[0] ထဲကတန်ဖိုးဖြစ်သွားမယ်
// console.log(reduce);



// some က လည်း အကုန်လုံးကို loop ပတ်ပေမယ့် conditional တွေ boolean တန်ဖိုးတွေကိုပဲ return ပြန်ပေးတယ်
// const condi = array.some((value,index, array) => {
//     // console.log(value, index, array);
//     return value < 2;
// })

// console.log(condi);



// every ကလည်းအကုန် loop ပတ်ပြီး conditional တွေဖြစ်သည် သို့သော် သူသည် array ထဲက တန်ဖိုတွေအားလုံးကိုဆိုလိုသည်
// condition စစ်တော့ array ထဲက တန်ဖိုးတွေအကုန် 2 ထက်ငယ်တယ်ဆိုလို့ false ပြန်ပေးသည်gi
const condi = array.every((value,index, array) => {
    // console.log(value, index, array);
    return value < 2;
})

console.log(condi);