const Nav = () => {
    const menu = ["Home", "Contact", "About", "Service"];

    // Inline style css
    const style = {
        headerStyle: {
            color: "#000",
            backgroundColor: "#fff"
        },
        menuStyle: {
            color: "#000",
            backgroundColor: "#fff"
        }
    }
    
  return (
    <div className="navContainer">
        <div>
            <h3 style={style.headerStyle}>DC Creation</h3>
        </div>
        <ul className="menuContainer">
            {
                menu.map((i, index) => <li style={style.menuStyle} key={index}>{i}</li>)
            }
        </ul>
    </div>
  )
}

export default Nav;