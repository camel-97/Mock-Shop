import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import Nav from "../components/nav.jsx"
import Home from "../pages/home.jsx"
import { MemoryRouter, Routes, Route } from "react-router";
import Layout from "../layout/Layout.jsx";

//Nav bar testing 
describe('Home Page and Nav Component', () => {
    it ('renders logo, and links container', () => {
        render (
            <MemoryRouter>
                <Nav  cart={[]} />
            </MemoryRouter>
    );
        expect(screen.getByTestId('logo')).toHaveTextContent(/mock-shop/i);
        
        const container = screen.getByTestId('links')
        const links = within(container).getAllByRole('link');
        expect(links).toHaveLength(3);
    })

    it ('renders main content on page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByText(/style starts here/i)).toBeInTheDocument();
    })

    it ('navigates to shop page on-click of shop Link', async () => {
        render (
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Nav cart={[]} />} />
                    <Route path="/shop" element={<div>Shop-page</div>} />
                </Routes>
            </MemoryRouter>
        )
            const link = screen.getByTestId('shop-link');
            const user = userEvent.setup()

            await user.click(link);

            expect(await screen.findByText(/shop-page/i)).toBeInTheDocument();
        
    })
})