import { BrowserRouter, Link, Route, Routes,NavLink } from "react-router-dom";
import Home from "./home";
import Login from "./login"; // Assuming you have a Login component
import Register from "./register"; // Assuming you have a Register component

function Routing() {
    return (
       
        <>
            <nav style={{display:"flex",backgroundColor:"blue",height:'50px', gap:'50px' ,justifyContent:'center',alignItems:'center',color:"white"}}>
                <Link to="home" className="nav-link">Home</Link>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                <NavLink to="/register" activeClassName="active">Register</NavLink>
            </nav>
               

                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </>
       
    );
}

export default Routing;
