import {useState} from "react";
import "./Counter.css";

// State တစ်ခု change တိုင်း Rerender ပြန်လုပ်တယ်

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleRemove = () => {

    };

    console.log(count);

  return (
    <div className="contentBox">
        <p>{count}</p>
        <div className="btnBox">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    </div>
  )
}

export default Counter;