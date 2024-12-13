import "./List.css"
import { FaTrashAlt, FaEdit  } from "react-icons/fa";

// Parent ဖြစ်တဲ့ Propstart ထဲကနေ prop ကတစ်ဆင့် ပေးလိုက်တဲ့ kay value data တွေကို ဒီ(child) ထဲကနေ ဘယ်လိုဖမ်းမလဲဆိုရင်
// Parameter ထဲမှာ object အနေနဲ့ ဖမ်းပြီးသုံးလို့ရပါတယ် => {props.name}, {props.age}

// Props တစ်ခုထက်ပိုလာရင် Object Destructuring နည်းနဲ့လည်းဖမ်းနိုင်ပြီး အောက်ကလိုတိုက်ရိုက် ပြန်သုံးနိုင်ပါတယ်


const List = ({id, name, age, location, isDone, onChecked, onEdit, onDelete}) => {
  
  const style = {
    bgStyle: {
      backgroundColor: "gray",
      textDecoration: "line-through"
    }
  }

  const handleChange = () => {
    onChecked(id);
  }

  const handleEdit = () => {
    onEdit(id);
  }

  // CRUD ဖြစ်တဲ့ Edit/Delete လုပ်တဲ့အပိုင်းတွေဆိုရင်လည်း Child to Parent Data ပြန်ပေးဖို့လိုတယ်
  // Unique ဖြစ်တဲ့ id key တွေနဲ့ ဘယ် Object ကိုဖျက်မှာလဲဆိုတာ လှမ်းဖမ်းရတာဆိုတော့ ကိုယ်ဖျက်မယ့် Item ရဲ့ id ကို Parent ကိုပို့ပေးဖို့လိုတယ်
  // အဲ့တာကြောင့် props နဲ့ function နှစ်ခုချိတ်လိုက်ပြီး Child ထဲက id ကို Parent ကိုလှမ်းပေးရခြင်းဖြစ်သည်
  // အဓိက Delete လုပ်တဲ့ Function က Parent Level ဖြစ်တဲ့ Propstart.jsx ထဲမှာ ရေးထားတယ်
  // အဲ့ Function ကို Parent Level မှာ props အနေနဲ့ List.jsx ထဲကိုပေးလိုက်ပြီး ဒီဘက်မှာ Object Destructuring နဲ့ထပ်ဖမ်းပြီး
  // ဒီထဲက handleDelete function ကနေ Parent မှာရှိတဲ့ function ကိုယ်စားပြု onDelete ကိုပြန်ခေါ်ထားခြင်းဖြစ်ပါတယ်
  const handleDelete = () => {
    onDelete(id);
  }

  return (
    // className နဲ့ရေးရင် class binding လို့ခေါ်ပြီး
    <div className={`listContainer ${isDone && "isDone"}`}>
      {/* အောက်ကလို style နဲ့ရေးရင် conditional styling လို့ခေါ်တယ် */}
      {/* <div style={isDone ? style.bgStyle : null}></div> */}
      
      <div className="textContainer">
        {/* Attribute Binding => ပုံမှန် input type မှာ checked လို့ရေးလိုက်ရင် အကုန်လုံးအမှန်ဖြစ်သွားပြီး jsx မှာတော့ attribute နဲ့ တွဲပြီး conditional သုံးလို့ရပါတယ်*/}
          <input onChange={handleChange} type="checkbox" name="" id="" checked={isDone}/>
          {/* <input type="checkbox" name="" id=""/> */}
          <h2>{name}</h2>
          <h2>{age}</h2>
          <h2>{location}</h2>
      </div>
      <div className="buttonContainer">
        <button onClick={handleEdit}><FaEdit /> Edit</button>
        <button onClick={handleDelete}><FaTrashAlt /> Delete</button>
      </div>
    </div>
  )
}

export default List