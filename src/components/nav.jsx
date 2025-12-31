import { Link } from "react-router";
import '../css/nav.css'

function Nav() {
    return (
        <div className="nav-bar">
            <div className="logo">Mock-Shop</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <div>
                    <Link to="/cart">Cart</Link>                  
                </div>
            </div>
        </div>
    )
}

export default Nav;