import "./page.css";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  }

  // useSearchParams ကိုသုံးပြီး url တစ်ခုမှာ query string အနေနဲ့ ရှာလိုက်တဲ့ data တွေကို api မှတစ်ဆင့် server ကို fetch လို့ရတယ်
  const [query, setQuery] = useSearchParams();

  const formRef = useRef();

  const handleClick = e => {
    // console.log("Click");
    e.preventDefault();
    // setQuery({name: "Thet Zaw Hein", age:25});
    console.log(formRef.current[0].value);
    console.log(formRef.current[1].value);
  }


  return (
    <div className="container about">
      <div className="toBoxes">
        {/* <h1>Back To Home</h1> */}
        {/* <button onClick={toHome}>Click Here!</button> */}
        <form ref={formRef}>
          <input type="text" placeholder="Username" style={{width:"320px", height: "34px", borderRadius: "7px", border: "none", paddingLeft: "12px"}}/>
          <input type="number" placeholder="Password" style={{width:"320px", height: "34px", borderRadius: "7px", border: "none", paddingLeft: "12px", margin: "20px 0"}}/>
          <button onClick={handleClick}>Search Query</button>
        </form>
      </div>
    </div>
  )
}

export default About;