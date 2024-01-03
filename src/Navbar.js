import { Link } from "react-router-dom";
import "./App.css";
import { FaAmazon } from "react-icons/fa";
function Navbar(){
    return(
        <div className="abc">
            <div>
                <FaAmazon />
            </div>
            <div>
                <Link className="xyz" to="/">Home</Link>
                <Link className="xyz" to="/menu">Menu</Link>
                <Link className="xyz" to="/contact">Contact</Link>
            </div>
        </div>
    )
}
export default Navbar;