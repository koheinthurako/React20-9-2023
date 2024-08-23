import "../components/Footer.css";
import style from "../App.module.css";
// အပေါ်မှာ module css ရေးနည်းနဲ့ရေးထားတယ် App.module.css ထဲမှာရှိတဲ့ css တွေက style ဆိုတဲ့ object အနေနဲ့သက်ရောက်နေပြီး
// အောက်ကလို style.container, style.h1 ဆိုပြီး {} အတွင်းမှာ ခေါ်သုံးနိုင်တယ်


const Footer = () => {
  return (
    <div className="footer">
        <div className={style.container}>
          <h1 className={style.h1}>This is footer</h1>
        </div>
    </div>
  )
}

export default Footer;