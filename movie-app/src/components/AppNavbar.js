import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useContext } from 'react';
import { AppContext } from '../App';

/**
 * AppNavbar component that renders the Navbar component
 * @returns {JSX.Element} AppNavbar component
 */
function AppNavbar() {
    const { cartItems } = useContext(AppContext);

    /**
     * Renders the AppNavbar component
     */
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>TMDB</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Search</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart-page">
                        <Nav.Link>
                            Cart <Badge>{cartItems.length}</Badge>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <Outlet />
        </>
    );
}

export default AppNavbar;
