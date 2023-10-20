import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Nav from "./pages/components/Nav";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import { BrowserRouter as Rounter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // <Router></Router> ဆိုပြီးအရင်ရေးခြင်းသည် Rounter တွေစုထားတဲ့နေရာကိုဆိုလိုသည် အထဲမှ Routes ကတော့ Route တစ်ခုချင်းစီထည့်ရေးရတဲ့ parent
    <Rounter>
    {/* <Router></Router> ထဲမှာ HTML elements တွေရေးလို့ရပေမယ့် <Routes></Routes> ထဲမှာတော့မရပါ */}
      {/* <div>Hello World</div> */}
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* 
          contact နောက်မှာ :id ထည့်လိုက်ခြင်းဖြင့် url မှတစ်ဆင့် id ကို contact ဆီသို့ useParams hook ကိုသုံးပြီး data ပေးပို့နိုင်သည်
          ထိုသို့ id ထည့်လိုက်ရင် url မှာ ရိုးရိုး /contact ဆိုဝင်မရတော့ပဲ /contact/123456 ဆိုမှသာ ဝင်လို့ရသည်
        */}
        <Route path="/contact/:id" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        {/*
          အောက်က Admin Route ထဲကို မဆိုင်သူမဝင်စေဘဲ admin တွေပဲဝင်စေချင်ရင် middleware တွေနဲ့ ကြားခံ cover လုပ်ပြီးစစ်ထားလို့ရတယ်
          example code တွေကို Admin.jsx ထဲမှာကြည့်ပါ
         */}
        <Route path="/admin" element={<Admin/>}/>
        {/* Page ထဲမှာပါဝင်တဲ့ path တွေမဟုတ်ပဲ တခြားမရှိတဲ့ path တစ်ခုခုကို သွားရင် error ပြအောင် path နေရာမှာ "*" ထည့်ပေးရတယ် */}
        <Route path="*" element={<Error/>}/>

        {/* react-router-dom မှာပါသော hook များ */}
      </Routes>
    </Rounter>
  )
}

export default App;