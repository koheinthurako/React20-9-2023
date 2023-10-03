import "./Propslist.css"

const Propslist = ({name, age, isDone}) => {

    const style = {
        bgStyle: {
            background: "black",
            textDecoration: "line-through"
        }
    }

  return (
    <div className="listContainer" style={isDone ? style.bgStyle : null}>
        <h3>This is Propslist named "{name}" and age is {age}.</h3>
    </div>
  )
}

export default Propslist;