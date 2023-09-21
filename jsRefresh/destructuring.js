// Object Destructuring
const obj = {
    name: "TZH",
    age: 24,
    gender: "Male"
};

// const {name, age, gender} = obj;
// console.log(name, age, gender);


// Array Destructuring
const arr = ["TZH", 24, "Male"];
// const [name, age, gender] = arr;
// ဒီနေရာတွင် name, age, gender တို့သည် array တွင် index အနေဖြင့်ဝင်သွားကြသည့်အတွက် destructuring တွင် နေရာချိန်းလိုက်သည်နှင့်လွဲကုန်မည်ဖြစ်သည်
// console.log(name, age, gender);
// ဒီလိုနေရာချိန်းလိုက်ရင် လွဲကုန်ပြီ
// const [age, gender, name] = arr;
// console.log(age, gender, name);



// Nested Destructuring
const obj2 = {
    name: "Ko Hein",
    age: 24,
    gender: "Male",
    school: {
        schoolName: "No 1",
        clssRoom: 10
    }
}

// const {name, age, gender, school} = obj2;
// console.log(name, age, gender, school);

// const {clssRoom, schoolName} = school;
// console.log(name, age, gender, clssRoom, schoolName);

// REACT တွင်ရေးနည်း ":{}" ဒီလိုရေးတယ် အပေါ်ကလို နှစ်ကြောင်းရေးစရာမလိုတော့ပါ
const {name, age, gender, school:{clssRoom, schoolName}} = obj2;
console.log(name, age, gender, schoolName, clssRoom);