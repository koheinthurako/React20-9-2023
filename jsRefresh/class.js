// class School {
//     // Class တွေကို obj ပြောင်းလိုက်တဲ့ အခါ constructor က စအလုပ်လုပ်ပြီး ဘယ်လို obj ဖြစ်ချင်တာလဲ ဆိုတာသတ်မှတ်ပေးတယ်
//     // ထိုအခါ dynamic values တွေထည့်ပေးလို့ရတယ်
//     constructor(name, age, gender, skills) {
//         console.log("Constructor");
//         this.name = name,
//         this.age = age,
//         this.gender = gender
//         skills = this.skills;
//         // this က class ကြီးတစ်ခုလုံးကို ကိုယ်စားပြုတယ်
//     }


//     // These are static values
//     schoolName = "No 1";
//     location = "Yangon";
//     skills = ["Java", "Database", "JS"];

//     greeting() {
//         return "Hello World";
//     }

//     // static ကို class က ပိုင်တယ်
//     static test = "This is own by class";

//     static testing() {
//         return "This method owns by class";
//     }


//     // private values & methods => OOP concept (Encapsulation)
//     // private တွေကို "#" ကိုသုံးပြီးရေးတယ်
//     #countOfStudent = 10;
//     // private value ကို မြင်ရပေမယ့် သူ့ကို object မှာ direct ယူသုံးလို့မရဘူး
//     // obj မှယူသုံးချင်ရင်တော့ method တစ်ခုတည်ဆောက်ပြီးမှ သူ့ထဲမှာ this keyword လေးခံပြီး သုံးရတယ်
//     gettingStudentCount() {
//         return this.#countOfStudent;
//     }

//     settingStudentCount(x) {
//         return this.#countOfStudent += x;
//     }


//     // private method တွေကိုလည်း method တစ်ခုအရင်ဆောက်ပြိးမှ this.keyword နဲ့ obj မှ ယူသုံးလို့ရမယ်
//     #studentRollcall() {
//         return "Start rollcall";
//     }

//     rollCallMethod() {
//         return this.#studentRollcall();
//     }
// };

// const S1 = new School("Ko Hein", 24, "Male");
// console.log(S1.name, S1.age, S1.location, S1.schoolName, S1.greeting());

// const T1 = new School("Dabue", 25, "Female");
// console.log(T1.name, T1.age, T1.location, T1.schoolName, T1.greeting());

// console.log(S1, T1);
// console.log(School.test, School.testing());

// // private value ရေးထားတဲ့ တန်ဖိုးကို ပြန်ယူဖို့ this keyword သုံးပြီးရေးထားတဲ့ method တွေကို console ထုတ်ခြင်း
// console.log(T1.gettingStudentCount());
// console.log(T1.settingStudentCount(20));

// console.log(S1.rollCallMethod());



// // OOP Concept (Inheritance)
// class Student extends School {
//     constructor(name, age, gender, skills, teacher) {
//         // Ineritance လုပ်ထားတဲ့ class မှာ constructor ပါလာရင် အဲ့ဒါကိုသုံးပြီး obj ကို တည်ဆောက်ပေးသည်
//         // Parent class မှ constructor ကို မသုံးတော့ပါ သို့သော် Parent class က constructor ကိုသုံးပြီး data တွေလိုချင်ရင်
//         // အောက်မှ super keyword ကို သုံးပြီး parent class constructor ကို ရယူနိုင်သည်
//         super(name, age, gender, skills);
//         this.teacher = teacher;
//     }
//     studentName = "Thura";
// }

// const Student1 = new Student("Ko Hein", 25, "Male", "Daw Hla");
// console.log(Student1);
// console.log(Student1.name, Student1.age, Student1.gender, Student1.skills, 
//     Student1.teacher, Student1.studentName, Student1.schoolName,
//     Student1.location);