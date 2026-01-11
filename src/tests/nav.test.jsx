import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import Nav from "../components/nav.jsx"
import { MemoryRouter, Routes, Route } from "react-router";

//Nav bar testing 
describe('Navbar Component', () => {
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