import List from "./List"
// ဒီ component ထဲမှာ List ဆိုတဲ့ children component ရှိတယ် ဒီထဲကနေသူ့ရဲ့ child component ထဲကို data passing ပေးချင်ရင်
// Prop ကိုသုံးနိုင်တယ်

const data = ["Hla", "Aye", "Aung"];

// အပေါ်က data တွေကို List ထဲလှမ်းပေးချင်တယ်ဆိုရင် prop(name နေရာမှာကြိုက်တာရေးနိုင်တယ်) ကိုသုံးနိုင်တယ်

const propstart = () => {
  return (
    <div>
      {/* Props တစ်ခုကို name မပေးပဲ သူ့ဘာသာထည့်ပေးလိုက်ရင် default true ဖြစ်တယ် */}
        <List name={data[0]} age={25} location="Yangon" isDone={true}/>
        <List name={data[1]} age={25} location="Insein" isDone={false}/>
        <List name={data[2]} age={25} location="Sagaing" isDone={false}/>
        <List name={data[2]} age={25} location="Sagaing" isDone/>
    </div>
  )
}

export default propstart