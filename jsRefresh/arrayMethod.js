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
*/


const array = [1, 2, 3, 4, 5];

// Normal for loop
// for(let i = 0; i <= array.length-1; i++) {
//     console.log(array[i]);
// }



// for in loop က array index တွေကို ထုတ်ပေးသည်
for (const key in array) {
    console.log(key);
}



// for of loop က array value တွေကို ထုတ်ပေးသည်
for (const key of array) {
    console.log(key);
}



// Map loop
const test = array.map((i, index, array) => {
    // console.log(i, index, array);
    return i + 1;
});
// Map က loop ပတ်ပြီး ပြန်လာတဲ့ return value တွေကို new array ကိုဆောက်ပေးသွားတယ်
console.log(test);
console.log(array);



const test2 = array.forEach((i, index, array) => {
    return i + 1;
});
console.log(test2);