import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SlideBar from "./components/SlideBar";
import "../src/App.css";

const App = () => {
  return (
    <div className="container">
      <Nav/>
      <div className="midContainer">
        <SlideBar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;