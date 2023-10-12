import { useEffect } from "react";

const ComponentTwo = () => {

    useEffect(() => {
        console.log("I am mounted in component two");
        // function တစ်ခုကို return ပြန်ပေးလိုက်ရင် cleanup function = unmounted
        return () => {
            console.log("I am unmounted in component two");
        }
    }, [])

  return (
    <div>ComponentTwo</div>
  )
}

export default ComponentTwo;