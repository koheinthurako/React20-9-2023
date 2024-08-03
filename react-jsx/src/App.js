import './App.css';

// function ကို React မှာ Component တစ်ခုလို့ခေါ်တယ် Component တွေက Return ပြန်ကိုပြန်ပေးရမယ်
// Return ပြန်လိုက်တာတွေကလည်း JSX Code တွေဖြစ်ကိုဖြစ်ရမယ်
// Component တစ်ခုကနေ Element တစ်ခုထပ်ပိုပြီး Return ပြန်ချင်ရင်တော့ React.Fragment ကိုသုံးပေးရမယ်
// အတိုကောက်ဆိုရင်တော့ ဒီလိုရေးတယ် "<></>"
function App() {

    const name = "tzh";

    const info = ["tzh", 24, "Spring Boot"];

    const boolean = true;

    // "textRed" ဆိုတဲ့ CSS ကို App.css ထဲမှာရေးထားတယ် အဲ့တာကို အောက်က textColor Variable တစ်ခုထဲ Assign ပြန်လုပ်ပြီး jsx ထဲမှာ ပြန်သုံးနိုင်တယ်
    // သုံးပုံသုံးနည်းကတော့ Js နဲ့ css ပေါင်းသုံးတဲ့ပုံစံဖြစ်တဲ့အတွက် className ဆိုပြီး {} ထဲမှာ Variable နာမည်ထည့်ရေးပေးရမယ်
    const textRed = "textRed";
    const textBlue = "textBlue";

    // JSX ထဲမှာ Javascript Statement တွေကိုတော့ ညှပ်ရေးလို့မရပါ (if condition/ for loop) တို့လိုဟာမျိုးတွေ

    function Click() {
        console.log("Click Start!");
    }

    function ClickAgain(x) {
        console.log(x);
    }

    function Click3(x,y) {
        console.log(x,y);
    }

    const items = ['Hello', 'Welcome to', 'React'];

    return (
        <>
            <div className="App">
                <h1 className={textRed}>Hello World</h1>
                {/* jsx ထဲမှာ Javascript တွေထည့်ရေးချင်ရင် "{}" အထဲမှာရေးလို့ရတယ် */}
                <h2>{5 + 5}</h2>
                <p>{name.toUpperCase()}</p>
                <p>{info.join().toUpperCase()}</p>
                {/* အောက်ကလို Conditional Rendering တွေလည်းလုပ်လို့ရတယ် */}
                <h2 className={boolean ? textBlue : textRed}>Welcome to Vietnam</h2>
                {
                    // boolean ? <p>I am true</p> : null
                    boolean && <p>I am true</p>
                }
                {/* React မှာ Self Closing Tag တွေဆိုရင် / ထည့်ပြီးပိတ်ပေးရမယ် */}
                <br/>
                <hr/>
                <img/>

                {/* Event အကြောင်းစမယ် Vanilla လိုပဲ ဟိုးအပေါ်က function Click ကို အောက်မှာ onClick Event ထဲမှာခေါ်ထားတယ် */}
                {/* တကယ့် Props တွေကတော့ Rendering ချပြတဲ့အချိန်မှာ HTML Tag တွေထဲမှာ ပါတော့မည်မဟုတ်ပါ */}
                {/* အောက်ကလို Function တွေကိုခေါ်ရင် () တွေကိုထည့်စရာမလိုတော့ပါ ထည့်မိလိုက်ရင်တော့ click မနှိပ်လည်း Function ကအလုပ်လုပ်နေမှာပါ */}
                <button onClick={Click}>Click Here</button>
                {/* parameter ထည့်ပေးချင်တယ်ဆိုရင်တော့ အောက်ကလို callback function ပုံစံရေးပေးရမယ် */}
                <button onClick={() => ClickAgain("Click Again")}>Click Again</button>
                {/* Function ထဲမှာ function ထည့်ရေးတဲ့ callback ပုံစံလို ထည့်မရေးချင်ရင်တော့ bind method ကိုသုံးလို့ရတယ် သူ့ရှေ့မှာတော့ Null ကိုထည့်ပေးရတယ် */}
                <button onClick={Click3.bind(null, "Click 3 times", "and Click 4 times")}>Bind Function</button>
                <hr/>
                <br/>
                {/* jsx မှာတော့ ရိုးရိုး html လို စာကြောင်းတွေအများကြီးရေးစရာမလိုပဲ js logic တွေနဲ့အောက်က li တွေကို looping ပတ်ထုတ်လို့ရတယ် */}
                <div>
                    <ul>
                        {/* သို့သော် looping ပတ်ပြီဆိုတာနဲ့ jsx က element တွေမှာရှိတဲ့ key တန်ဖိုးတွေကိုယူပြီး ReactDOM ပေါ်မှာ render လုပ်တာမို့ */}
                        {/* key တွေကိုသတ်မှတ်ပေးဖို့လိုတယ် ဒါကြောင့် static data တွေဆိုရင် သူ့ရဲ့ index တန်ဖိုးတွေနဲ့ key တွေကို သတ်မှတ်လို့အဆင်ပြေပေမယ့် */}
                        {/* dynamic data တွေဆိုရင်တော့ လုံးဝအဆင်မပြေပါ */}
                        {
                            items.map((i, index) => <li key={index}>{i}</li>)
                        }
                    </ul>
                </div>

            </div>
            <div>
                <Button/>
                <Test/>
            </div>
        </>
    );
}

export default App;

function Button() {
    return <div><p>I am button</p></div>
}

function Test() {
    return <div><p>I am just testing</p></div>
}

// jsx က html နဲ့ဆင်တယ် အကုန်လုံးတော့မတူ
// React က Component Based ဖြစ်လို့ Component(function) တွေကို 1 file ထဲမှာပေါင်းရေးရင် ရှုပ်သွားမှာမို့ File တွေခွဲပြီး import နည်းနဲ့ပေါင်းရေးတယ်
// အဓိက Run ပေးနေတဲ့ Component က အပေါ်ဆုံးက App Level Component ဖြစ်လို့ အဲ့ထဲကပဲ Browser မှာမြင်ရအောင် render လုပ်ပေးနေတာဖြစ်တယ်
// ခွဲရေးထားတဲ့ Component တွေကို App Level/ Parent Level မှာ လာပေါင်းရေးရင် ပထမစာလုံးကိုအကြီးရေးရပြီး Self Closing Tag နဲ့ရေးရတယ်
// React Component အနေနဲ့ရေးမယ်ဆိုရင် UpperCase နဲ့ပဲစပေးရမယ်