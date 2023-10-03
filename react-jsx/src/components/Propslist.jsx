import "./Propslist.css"

const Propslist = (props) => {
    console.log(props);
  return (
    <div className="listContainer">
        <h3>This is Propslist named "{props.name}"</h3>
    </div>
  )
}

export default Propslist;