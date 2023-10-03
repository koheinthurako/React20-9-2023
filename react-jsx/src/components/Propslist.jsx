import "./Propslist.css"

const Propslist = ({name, age}) => {
  return (
    <div className="listContainer">
        <h3>This is Propslist named "{name}" and age is {age}</h3>
    </div>
  )
}

export default Propslist;