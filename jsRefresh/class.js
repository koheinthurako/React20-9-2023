class School {
    // Class တွေကို obj ပြောင်းလိုက်တဲ့ အခါ constructor က စအလုပ်လုပ်ပြီး ဘယ်လို obj ဖြစ်ချင်တာလဲ ဆိုတာသတ်မှတ်ပေးတယ်
    // ထိုအခါ dynamic values တွေထည့်ပေးလို့ရတယ်
    constructor(name, age, gender) {
        console.log("Constructor");
        this.name = name;
        this.age = age;
        this.gender = gender;
        // this က class ကြီးတစ်ခုလုံးကို ကိုယ်စားပြုတယ်
    }


    // These are static values
    name = "No 1";
    location = "Yangon";

    greeting() {
        return "Hello World";
    }

};

const S1 = new School("Ko Hein", 24, "Male");
console.log(S1.name);
console.log(S1.age);
console.log(S1.location);
console.log(S1.greeting());