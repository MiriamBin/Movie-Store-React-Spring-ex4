import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useContext } from 'react';
import { AppContext } from '../App';

function AppNavbar() {
    const { cartItems } = useContext(AppContext);

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
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        </>
    );
}

export default AppNavbar;
