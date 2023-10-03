import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SlideBar from "./components/SlideBar";
import "../src/App.css";
import Propslist from "./components/Propslist";

const App = () => {
  return (
    <div className="container">
      <Nav/>
      <div className="midContainer">
        <SlideBar/>
        <Main/>
      </div>
      <Footer/>

    {/* Props အကြောင်းအစ */}
    <Propslist/>

    </div>
  )
}

export default App;