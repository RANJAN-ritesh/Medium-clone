import {Link} from "react-router-dom"
import "./navbar.css"
export const Navbar = () => {
    return <div className="navbar">
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signin">SignIN</Link>
        <Link to="/write">Write</Link>
    </div>
}