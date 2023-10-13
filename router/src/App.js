import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Nav from "./pages/components/Nav";
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
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
    </Rounter>
  )
}

export default App;