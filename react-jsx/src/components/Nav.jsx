const Nav = () => {
    const menu = ["Home", "Contact", "About", "Service"];
    
  return (
    <div className="navContainer">
        <div>
            <h3>DC Creation</h3>
        </div>
        <ul className="menuContainer">
            {
                menu.map((i, index) => <li key={index}>{i}</li>)
            }
        </ul>
    </div>
  )
}

export default Nav;