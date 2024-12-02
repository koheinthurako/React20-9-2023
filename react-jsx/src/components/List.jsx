import "./List.css"

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
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default List