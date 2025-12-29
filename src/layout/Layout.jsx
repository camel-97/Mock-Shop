import { Outlet } from 'react-router'
import { Link } from 'react-router';

function Layout() {
    return (
        <>
        {/*Nav component*/}
        <p>Nav is here</p>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <main>
            <Outlet/>
        </main>
        {/*Footer component*/ }
        <p>Footer is here</p>
        </>
    )
}

export default Layout;