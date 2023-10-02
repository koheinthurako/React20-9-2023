import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SlideBar from "./components/SlideBar";

const App = () => {
  return (
    <div>
      <Nav/>
      <div>
        <SlideBar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;