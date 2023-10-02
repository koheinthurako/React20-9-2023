import "../src/App.css";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <One/>
      <Two/>
      <Three/>
    </div>
  );
};

export default App;