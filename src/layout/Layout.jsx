import { Outlet } from 'react-router'
import Nav from '../components/nav';

function Layout() {

    const [cart, setCart] = useState({});

    return (
        <>
        <Nav/>
        <main>
            <Outlet/>
        </main>
        {/*Footer component*/ }
        <p>Footer is here</p>
        </>
    )
}

export default Layout;