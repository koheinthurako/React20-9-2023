import "./Propslist.css";
import {BsTrash} from "react-icons/bs";
import {BiEdit} from "react-icons/bi"

const Propslist = ({data, isDone, onChecked, id, onDelete, onEdit}) => {

    // const style = {
    //     bgStyle: {
    //         background: "black",
    //         textDecoration: "line-through"
    //     }
    // }

    const handleChange = () => {
      onChecked(id);
    };

    const handleDelete = () => {
      onDelete(id);
    }

    const handleEdit = () => {
      onEdit(id);
    }

  return (
    // ဒါက style binding ဖြစ်ပြီး အဲ့ဒါကိုမသုံးပဲ class binding ကိုလည်းသုံးလို့ရတယ်
    // <div className="listContainer" style={isDone ? style.bgStyle : null}>
    //     <h3>This is Propslist named "{name}" and age is {age}.</h3>
    // </div>

    // ဒါက class binding ဖြစ်ပြီး အပေါ်က style variable ထဲကမဟုတ်ပဲ Propslist.css ထဲက style class ကိုယူသုံးထားတယ်
    // အောက်က className ထဲမှာ template literal ကိုအသုံးပြုထားပြီး js တုန်းကလို တန်းရေးလို့မရပဲ {``} ထဲမှာပဲ ရေးလို့ရတယ်
    <div className={`listContainer ${isDone && "done"}`}>
       <div className="textContainer">
          {/* <h3>This is Propslist named "{name}" and age is {age}.</h3> */}
          <input checked={isDone} onChange={handleChange} type="checkbox" />
          {/* checked props ကိုသုံးထားပေမယ့် onChange props ကိုမသုံးရင် warning ဖြစ်တယ် checked က အသေသဘောမျိုးဖြစ်သွားသည့်အတွက်
          onChange ကိုထည့်ပေးမှသာလျှင် တစ်ခုခုပြောင်းလဲသွားတိုင်း onChange ထဲက function အလုပ်လုပ်သွားပြီး rendering လုပ်ပေးနိုင်မယ် */}
          <p>{data}</p>
       </div>
       <div className="btnContainer">
        <button onClick={handleEdit}><BiEdit/></button>
        <button onClick={handleDelete}><BsTrash/></button>
       </div>
    </div>
  )
}

export default Propslist;