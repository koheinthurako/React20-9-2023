import "./Form.css";
import { useRef } from "react";

const Form = ({onSubmit}) => {

    const inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        onSubmit(inputRef.current.value);
    };

  return (
    <form className="formContainer">
        <input ref={inputRef} type="text" placeholder="Write something..."/>
        <button onClick={handleClick}>Add</button>
    </form>
    
  )
}

export default Form;