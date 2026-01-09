import { Link } from "react-router";
import '../css/nav.css'

function Nav({ cart }) {

    const totalqty = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="nav-bar">
            <div className="logo">Mock-Shop</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <div className="cart-cont">
                    <Link to="/cart">Cart</Link>
                    {totalqty === 0 ? (null) : (
                        <div className="cart-icon">
                            {totalqty}
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Nav;