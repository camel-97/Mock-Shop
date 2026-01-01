import { Outlet } from 'react-router'
import { useState } from 'react';
import Nav from '../components/nav';

function Layout() {

    const [cart, setCart] = useState([]);

    return (
        <>
        <Nav cart={cart}/>
        <main>
            <Outlet context={{cart, setCart}}/>
        </main>
        {/*Footer component*/ }
        <p>Footer is here</p>
        </>
    )
}

export default Layout;