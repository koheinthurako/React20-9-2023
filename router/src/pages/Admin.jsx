import { Navigate } from "react-router-dom";

const Admin = () => {

    if(localStorage.getItem("token")) {
        return (
            <div className="container admin">
                <h1>Admin</h1>
            </div>
          )      
    } else {
        return <Navigate to={"/"} />
    }
}

export default Admin;