import { Link } from "react-router";
import '../css/nav.css'

function Nav({ cart }) {

    const totalqty = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="nav-bar">
            <div data-testid="logo" className="logo">Mock-Shop</div>
            <div data-testid="links" className="links">
                <Link to="/">Home</Link>
                <Link data-testid="shop-link" to="/shop">Shop</Link>
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