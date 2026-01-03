import { Outlet } from 'react-router'
import { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

function Layout() {

    const [cart, setCart] = useState([]);

    return (
        <>
            <Nav cart={cart}/>
            <main>
                <Outlet context={{cart, setCart}}/>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;